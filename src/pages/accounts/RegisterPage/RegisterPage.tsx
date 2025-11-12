import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/forms/RegisterForm';
import { useRegisterMutation } from '../../store/apiAuth';
import type { IRegisterRequest } from '../../types/auth/IRegister';

const RegisterPage: FC = () => {
    const navigate = useNavigate();
    const [register, { isLoading, error }] = useRegisterMutation();

    const handleSubmit = async (data: IRegisterRequest) => {
        try {
            const result = await register(data).unwrap();

            // Зберігання токена, якщо він повертається
            if (result.token) {
                localStorage.setItem('authToken', result.token);
            }

            // Перенаправлення після успішної реєстрації
            navigate('/dashboard');

            // Або показати повідомлення про успіх
            console.log('Реєстрація успішна:', result);
        } catch (err) {
            console.error('Помилка реєстрації:', err);
            throw err;
        }
    };

    const handleCancel = () => {
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Створити новий аккаунт
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Або{' '}
                        <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                            увійдіть в існуючий
                        </a>
                    </p>
                </div>

                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
                            <p className="text-sm text-red-600">
                                {'data' in error && error.data
                                    ? String(error.data)
                                    : 'Помилка при реєстрації'}
                            </p>
                        </div>
                    )}

                    <RegisterForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;