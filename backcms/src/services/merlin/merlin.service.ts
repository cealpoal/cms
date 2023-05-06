import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import UsersRequest from 'src/dto/requests';
import sessionRespose from 'src/dto/responses';

@Injectable()
export class MerlinService {
    constructor(private base:BaseService){}
    
    public async Gateway(params:UsersRequest):Promise<sessionRespose> {
        this.base.bividi(params.user).then(data => {
            params.user = data;
        });
        // this.base.bividi(params.pass).then(data => {
        //     params.pass = data;
        // });
        return null;
    }
}

