import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private readonly songs = [];

    create(song) {
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // error handling

        throw new Error('error while fetching records from db')
        return this.songs;
    }
}
