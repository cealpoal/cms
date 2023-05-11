import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { galleryRequest, sessionRequest } from 'src/dto/requests';
import { GalleryService } from 'src/services/gallery/gallery.service';

@Controller('gallery')
export class GalleryController {
    constructor(private gallery:GalleryService){}

    @Get()
    async get(@Body() user: sessionRequest){
        return this.gallery.GetGallery(user).then(data => { return data;});
    }

    @Post()
    async post(@Body('user') user: sessionRequest,@Body('data') data: galleryRequest[]){
        return this.gallery.PostGallery(null,data).then(data => { return data });
    }

    @Put(':fileId')
    async put(@Param("fileId") fileId:string, @Body() user: sessionRequest, @Body() data ){
        return this.gallery.PutGallery(user, fileId, data).then(data => { return data});
    }

    @Delete()
    async delete(@Param("fileName") fileIds: string[], @Body() user: sessionRequest){
        return this.gallery.DeleteGallery(user, fileIds).then(data => { return data});
    }
}
