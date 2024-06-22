import { InputValues } from './type';

export const getFormData = (inputValues: InputValues) => {
    const formData = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Артур',
            label: 'Имя',
            errorMessage:
                'Имя не должно содержать пробел или специальные символы',
            pattern: '^[a-zA-ZА-Яа-яЁё]+$',
            required: true,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'example@mail.ru',
            label: 'Электронная почта',
            errorMessage: 'Некорректный адрес почты',
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: '******',
            label: 'Пароль',
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: '******',
            label: 'Подтвердите пароль',
            pattern: inputValues.password,
            errorMessage: 'Пароль должен совпадать',
        },
    ];
    return formData;
};
