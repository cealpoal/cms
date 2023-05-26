export default interface sessionRespose{
    user:string;
    dateInit:string;
    dateEnd:string;
}

export interface galleryResponse{
    path:string;
    id:string;
    description:string;
    inscription:Date;
}

export interface newResponse{
    id:string;
    pathImage:string;
    title:string;
    description:string;
    inscription:Date;
    url:string;
}