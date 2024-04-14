import { CreateSongDTO } from './dto/create-song-dto';
import { SongsService } from './songs.service';
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {

    constructor(private SongsService: SongsService) {}

    @Post()
    create(@Body() createSongDTO: CreateSongDTO) {
        return this.SongsService.create(CreateSongDTO);
    }

    @Get()
    findALL() {
        try {
            return this.SongsService.findAll();
        } catch (error) {
            throw new HttpException('Server Error', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
            })
        }
        
    }

    @Get(':id')
    findOne(
        @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_FOUND})) // parseintpipe used to convert string to number
        id: Number
    ) {
        
        return `fetch song based on id ${typeof id}`
    }

    @Put(':id')
    update() {
        return 'update the song'
    }

    @Delete(':id')
    delete() {
        return 'delete the song'
    }
}
