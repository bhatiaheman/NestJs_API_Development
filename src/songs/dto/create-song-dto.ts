import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO {

    @IsString()
    @IsNotEmpty()
    readonly title: String;

    @IsString()
    @IsNotEmpty()
    @IsArray()
    readonly artists: String[];

    @IsNotEmpty()
    @IsDateString()
    readonly releaseDate: Date;


    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration: Date
}