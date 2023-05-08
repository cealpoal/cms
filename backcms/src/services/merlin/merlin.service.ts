import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import UsersRequest, { galleryRequest, sessionRequest } from 'src/dto/requests';
import sessionRespose, { galleryResponse } from 'src/dto/responses';
import Users from 'src/dto/domains';

const moment = require("moment");

@Injectable()
export class MerlinService {
    constructor(private base:BaseService){}
    
    //Autorizaciòn de sesiòn de usuario
    public async Gateway(params:UsersRequest):Promise<sessionRespose> {
        const sessionNow = this.base.ReadFile('kabuto').then(data => {
            if(data.admin.User == params.user && data.admin.Password == params.pass){
                return {
                    user: data.admin.Name,
                    dateInit: moment().format(),
                    dateEnd: moment().add(1,'h').format()
                }
            }
            return null;
        });
        return sessionNow;
    }

    public async GetGallery(user:sessionRequest):Promise<galleryResponse[]>{
        if(!this.VerifySession(user)){ return null; }
        const gallery = this.base.ReadFile('picasso').then(data => {
            return data;
        });
        return gallery;
    }

    public async SetGallery(user:sessionRequest,data:galleryRequest[]):Promise<boolean>{
        if(!this.VerifySession(user)){ return null; }
        return this.base.WriteFile('picasso',data).then(data => { return data;} );
    }

    private VerifySession(user:sessionRequest):boolean{
        //Porhacer: validar la sesiòn
        return true;
    }
}

