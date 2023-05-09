import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { sessionRequest } from 'src/dto/requests';
import { GalleryService } from 'src/services/gallery/gallery.service';

@Controller('gallery')
export class GalleryController {
    constructor(private gallery:GalleryService){}

    @Get('gallery')
    async get(@Body() user: sessionRequest){
        return this.gallery.GetGallery(user).then(data => { return data;});
    }

    @Post('gallery')
    async post(@Body() user: sessionRequest, @Body() data){
        return this.gallery.PostGallery(user,data).then(data => { return data });
    }

    @Put('gallery/:fileId')
    async put(@Param("fileId") fileId:string, @Body() user: sessionRequest, @Body() data ){
        return this.gallery.PutGallery(user, fileId, data).then(data => { return data});
    }

    @Delete('gallery')
    async delete(@Param("fileName") fileIds: string[], @Body() user: sessionRequest){
        return this.gallery.DeleteGallery(user, fileIds).then(data => { return data});
    }
}
