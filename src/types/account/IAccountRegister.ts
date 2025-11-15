export interface IRegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    image: File | null;
}

export interface IUserResponse {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    image?: string | null;
}

export interface IRegisterResponse {
    token: string;
    user: IUserResponse;
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
    user: IUserResponse;
}

// Помилки від API
export interface IApiErrorResponse {
    message?: string;
    title?: string;
    errors?: Record<string, string[]>;
}