import React from "react";

interface InputBoxProps {
    label: string
    placeholder?: string
    name?: string
    rows?: number
}

export function InputBox(props: InputBoxProps) {
    return <div className="mb-8">
        <label
            htmlFor={props.name}
            className="block text-2xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        <textarea
            name={props.name}
            id={props.name}
            rows={props.rows ?? 8}
            placeholder={props.placeholder}
            maxLength={100}
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
    </div>
}