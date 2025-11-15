import type { IAuthUser } from '../types/account/IAccountLogin.ts';

/**
 * Перевіряє чи користувач авторизований
 */
export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem('authToken');
    return !!token;
};

/**
 * Отримує токен користувача
 */
export const getToken = (): string | null => {
    return localStorage.getItem('authToken');
};

/**
 * Отримує дані користувача з localStorage
 */
export const getUser = (): IAuthUser | null => {
    try {
        const userStr = localStorage.getItem('user');
        if (!userStr) return null;
        return JSON.parse(userStr) as IAuthUser;
    } catch (error) {
        console.error('Помилка парсингу даних користувача:', error);
        return null;
    }
};

/**
 * Зберігає токен та дані користувача
 */
export const saveAuthData = (token: string, user: IAuthUser): void => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
};

/**
 * Видаляє всі дані аутентифікації
 */
export const clearAuthData = (): void => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
};

/**
 * Оновлює дані користувача
 */
export const updateUser = (user: IAuthUser): void => {
    localStorage.setItem('user', JSON.stringify(user));
};