interface InputProps {
    placeholder: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: any
}

export function Input({placeholder, ref}: InputProps) {
    return (
        <div>
            <input ref={ref} type="text" className="px-4 py-2 border rounded m-2" placeholder={placeholder} />
        </div>
    )
}