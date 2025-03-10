export type Sport = {
    ID:number,
    KeyName:string,
    N:number,
    Name:string,
    Regions:Record<string, Region>
    SportType:number,
}

export type Region = {
    ID:number,
    KeyName:string,
    N:number,
    name:string
    Champs: Record<string, Champ>
}
export type Champ = {
    ID:number,
    KeyName:string,
    N:number,
    name:string
    inTop:boolean
    GameCount:number
    GameSmallItems: Record<string, GameSmallItem>
}
export type GameSmallItem = {
    Champ:number,
    ID:number,
    Region:number,
    Sport:number,
    StartTime:string,
    istop:boolean,
    istopbanner:boolean,
    neut:boolean,
    plng:string,
    t1:number,
    t2:number
}

export type TreeObjectT = {
    EN:{
        Language:number,
        LastUpdateTime:number,
        header:boolean,
        up:number,
        Sports:Record<string, Sport>
    }
}

export type TeamObjectT = {
    ID:number,
    Name:string,
    Sport:number,
    TeamExternalId:null
}