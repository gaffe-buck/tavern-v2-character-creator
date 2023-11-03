import React from "react";

interface InputLineProps {
    label: string
    placeholder?: string
    name?: string
}

export function InputLine(props: InputLineProps) {
    return <div className="mb-8">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        <input
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            type="text"
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
    </div>
}