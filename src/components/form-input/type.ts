export interface FormInputProps {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    label: string;
    errorMessage?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
