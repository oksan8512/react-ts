export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    photo?: string;
    token: string;
}

export interface IAuthUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    photo?: string;
}