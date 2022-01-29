import {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    useState
} from 'react';
import '../Styles/Input.css';

type TextValidator = (val: string) => boolean;

interface ITextFieldProps {
    defaultValue?: string;
    onValueChange?: (val: string) => void;
    onQuickValidate?: (val: string) => boolean;
    onFullValidate?: (val: string) => boolean;
}

export function TextField(props: ITextFieldProps) {
    const onQuickValidate = props.onQuickValidate ?
        props.onQuickValidate : defaultValidator;
    const onFullValidate = props.onFullValidate ?
        props.onFullValidate : defaultValidator;
    const onChange = props.onValueChange ?
        props.onValueChange : (_val: string) => { };
    const defaultValue = props.defaultValue ? props.defaultValue : "";

    const [value, setValue] = useState(defaultValue);

    return (
        <input type={"text"}
            value={props.defaultValue}
            className={"OODCoreComponentInput"}
            onBlur={onBlur(onQuickValidate, onFullValidate)}
            onChange={onValueChange(onQuickValidate, onChange, setValue)}
            onKeyDown={onKeyDown(setValue, defaultValue)}
        />
    );
}

function defaultValidator(_val: string) {
    return true;
}

function onBlur(onQuickValidate: TextValidator, onFullValidate: TextValidator) {
    return (event: FocusEvent<HTMLInputElement>) => {
        const val = event.target.value;

        if (!onQuickValidate(val) || !onFullValidate(val)) {
            event.currentTarget.focus();
        }
    }
}

function onValueChange(
    onQuickValidate: TextValidator,
    onValueChange: (val: string) => void,
    setValue: (val: string) => void)
{
    return (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;

        setValue(val);

        if (onQuickValidate(val)) {
            onValueChange(val);
        }
    };
}

function onKeyDown(setValue: (val: string) => void, defaultValue: string) {
    return (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 28) {
            setValue(defaultValue);
        }
    }
}