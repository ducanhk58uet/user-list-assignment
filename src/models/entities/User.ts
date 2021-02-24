
export interface NameOfUser {
    title: string;
    first: string;
    last: string;
}

export interface UserPicture {
    large?: string;
    medium?: string;
    thumbnail?: string;
}

export interface UserLoginInfo {
    uuid?: string;
    username: string;
}

export interface User {
    name: NameOfUser;
    picture: UserPicture;
    login: UserLoginInfo;
}