import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import UsersRequest from 'src/dto/requests';
import sessionRespose from 'src/dto/responses';
import Users from 'src/dto/domains';

@Injectable()
export class MerlinService {
    constructor(private base:BaseService){}
    
    public async Gateway(params:UsersRequest):Promise<sessionRespose> {
        this.base.ReadFile('kabuto').then(data => {
            let user = <Users>data;
            if(user.User == params.user && user.Password == params.pass){
                const sessionNow:sessionRespose = {
                    user: user.Name,
                    dateInit: new Date().toLocaleString(),
                    dateEnd: new Date().toLocaleString()
                }
            }
        });
        
        return null;
    }
}

