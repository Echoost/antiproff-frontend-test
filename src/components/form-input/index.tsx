import './index.css';
import { useState } from 'react';
import { FormInputProps } from './type';

export const FormInput = (props: FormInputProps) => {
    const [focused, setFocused] = useState(false);
    const [type, setType] = useState('password');
    const { label, onChange, errorMessage, id, ...inputProps } = props;

    const handleSetFocuse = () => {
        setFocused(true);
    };

    const handleShowPassword = () => {
        switch (type) {
            case 'password': {
                setType('text');
                break;
            }
            case 'text': {
                setType('password');
                break;
            }
        }
    };

    return (
        <div className="form-input">
            <label>{label}</label>
            <div className="form-textarea">
                <input
                    key={id}
                    {...inputProps}
                    type={props.type === 'password' ? type : props.type}
                    onChange={onChange}
                    onBlur={handleSetFocuse}
                    focused={focused.toString()}
                />
                {props.type === 'password' && (
                    <img
                        onClick={handleShowPassword}
                        className="form-image"
                        src="/icons/eye.svg"
                    />
                )}
                <span>{errorMessage}</span>
            </div>
        </div>
    );
};
