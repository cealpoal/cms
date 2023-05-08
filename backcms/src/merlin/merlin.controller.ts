import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import UsersRequest, { sessionRequest } from 'src/dto/requests';
import sessionRespose from 'src/dto/responses';
import { MerlinService } from 'src/services/merlin/merlin.service';

@Controller('merlin')
export class MerlinController {
    constructor(private merlin:MerlinService){}

    @Get('gateway')
    async boo(@Body() data:UsersRequest) {
        return this.merlin.Gateway(data).then(data => {
            return data;
        });
    }

    @Get('gallery')
    async abra(@Body() user: sessionRequest){
        return this.merlin.GetGallery(user).then(data => { return data;});
    }

    @Put('gallery')
    //@Param("fileName") fileName: string
    async kadabra(@Body() user: sessionRequest, @Body() data ){
        return this.merlin.SetGallery(user, data).then(data => { return data});
    }
}