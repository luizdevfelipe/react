
interface IInputLoginProps {
    label: string;
    name: string;
    value?: string;
    type?: string;
    ref?: React.Ref<HTMLInputElement>;
    onChange?: (newValue: string) => void;
    onPressSpace?: () => void;

}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
    const { label, value, onChange, onPressSpace, name, type } = props;

    return (
        <>
            <label htmlFor={"i"+name}>{label}</label>
            <input type={type ?? "text"} id={"i"+name}
                value={value}
                ref={props.ref}
                onChange={e => onChange?.(e.target.value)}
                onKeyDown={e => e.key === ' ' ? onPressSpace?.() : undefined}
            />
        </>
    );
}