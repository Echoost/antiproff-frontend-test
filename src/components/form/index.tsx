import './index.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { FormInput } from '../form-input';
import { getFormData } from './form-data';
import { useRegisterUserMutation } from '../../shared/api/registration-api';
import { changeAuthorizationStatus } from '../../shared/slices/authorization-slice';
import { Button } from '../button';

export const Form = () => {
    const [inputValues, setInputValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [registerUser] = useRegisterUserMutation();
    const dispatch = useDispatch();
    const handleChangeInputValues = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitForm = async (event: React.FormEvent<HTMLDivElement>) => {
        event.preventDefault();
        const { email, password } = inputValues;
        try {
            const responce = await registerUser({ email, password });
            if (responce.data) {
                localStorage.setItem('token', responce.data.token);
                dispatch(changeAuthorizationStatus(true));
            }
            if (responce.error) {
                Swal.fire({
                    title: 'Ошибка!',
                    text: `${responce?.error?.data.error}!`,
                    icon: 'error',
                    confirmButtonText: 'Продолжить',
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Ошибка!',
                text: `${error}`,
                icon: 'error',
                confirmButtonText: 'Продолжить',
            });
        }
    };

    const formData = getFormData(inputValues);

    return (
        <div className="form" onSubmit={handleSubmitForm}>
            <form>
                <p className="form-title">Регистрация</p>
                {formData.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        onChange={handleChangeInputValues}
                    />
                ))}
                <Button primary width="100%" height="48px" margin="24px 0 0 0">
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
};
