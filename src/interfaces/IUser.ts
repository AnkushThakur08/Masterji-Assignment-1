export interface     {
    gender: string;
    name: IUserName;
    location: ILocation;
    email: string;
    login: ILogin;
    dob: IDob;
    registered: IRegistered;
    phone: string;
    cell: string;
    id: number;
    picture: IPicture;
    nat: string;
}

interface IUserName {
    title: string;
    first: string;
    last: string;
}

interface ILocation {
    street: IStreet;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: ICoordinates;
    timezone: ITimezone;
}

interface IStreet {
    number: number;
    name: string;
}

interface ICoordinates {
    latitude: string;
    longitude: string;
}

interface ITimezone {
    offset: string;
    description: string;
}

interface ILogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface IDob {
    date: string;
    age: number;
}

interface IRegistered {
    date: string;
    age: number;
}

interface IPicture {
    large: string;
    medium: string;
    thumbnail: string;
}
