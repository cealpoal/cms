import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import UsersRequest from 'src/dto/requests';
import sessionRespose from 'src/dto/responses';
import { MerlinService } from 'src/services/merlin/merlin.service';

@Controller('merlin')
export class MerlinController {
    constructor(private merlin:MerlinService){}

    @Get('gateway')
    async boo(@Body() data:UsersRequest):Promise<sessionRespose> {
        this.merlin.Gateway(data);
        return null;
    }

    // @Get('/file')
    // async abra(){
    //     return this.ReadFile();
    // }

    // @Put('/file:fileName')
    // async kadabra(@Body() data: any, @Param("fileName") fileName: string ){
    //     return this.WriteFile(fileName, data);
    // }
}