import React from "react";

interface InputNumberProps {
    label: string
    placeholder?: string
    name?: string
    value: number | null
    optional?: boolean
    onChange: (v: string) => void
    onDelete?: () => void
}

export function InputNumber(props: InputNumberProps) {
    return <div className="mb-8">
        <div className="flex flex-row justify-between items-center">
            <label
                htmlFor={props.name}
                className="block text-xl font-bold text-mumble mb-4">
                {props.label}
            </label>
            {!!props.optional &&
                <span
                    onClick={() => props.onDelete()}
                    className="select-none text-interactive text-lg mr-2 material-symbols-outlined hover:cursor-pointer">
                    delete
                </span>
            }
        </div>
        <input
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value ?? ""}
            type="number"
            step={1}
            onChange={(e) => { props.onChange(e.target.value) }}
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
    </div >
}