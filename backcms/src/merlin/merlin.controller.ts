import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
const fs = require('fs');

@Controller('merlin')
export class MerlinController {
    private ruta:string = './src/';

    @Get()
    async abra(){
        return this.ReadFile();
    }

    @Put(':fileName')
    async kadabra(@Body() data: any, @Param("fileName") fileName: string ){
        return this.WriteFile(fileName, data);
    }

    private ReadFile():any{
        try {
            const data = fs.readFileSync(this.ruta + 'testJsonFile.json', 'utf8');
            const jsonData = JSON.parse(data);            
            return jsonData;
        } catch (error) { // 7
            console.log(`ERROR: ${error}`);
            return null;
        }
    }

    private WriteFile(fileName:string, data:any):boolean{
        try {
            const frameworksData = JSON.stringify(data);
            fs.writeFileSync(this.ruta + fileName + '.json', frameworksData, 'utf-8');
            return true;
        } catch (error) { 
            console.log(`WRITE ERROR: ${error}`);
            return false;
        }
    }
}
