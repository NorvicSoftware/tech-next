import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import "../../../css/app.css";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit} className="blue-box rounded-corners">
                     <Link href="/">
                        <img src="/img/logo-project.png" className="logo-image" />
                    </Link>
                    <div className="project-title">StartProject</div>
                <div className="input-field">
                    <InputLabel htmlFor="email" value="Correo" className="input-label white-text" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full input-text"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Correo"
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4 input-field">
                    <InputLabel htmlFor="password" value="Contraseña" className="input-label white-text" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full input-text"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Contraseña"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <PrimaryButton className="ms-4 login-button" disabled={processing}>
                        Iniciar sesión
                    </PrimaryButton>
                </div>

                <div className="flex-justify mt-4">
    <div className="block">
        <label className="flex items-center">
            <Checkbox
                name="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Recuerdame</span>
        </label>
    </div>

    {canResetPassword && (
        <Link
            href={route('password.request')}
            className="forgot-password-link underline text-sm hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
            ¿Olvidaste tu contraseña?
        </Link>
    )}
</div>
            </form>
        </GuestLayout>
    );
}
