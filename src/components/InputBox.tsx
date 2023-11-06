import React from "react";
import { Required } from "./Required";
import { GlobalStateManager } from "src/GlobalStateManager";

interface InputBoxProps {
    label: string
    placeholder?: string
    name?: string
    rows?: number
    required?: boolean
    value: string
    onChange: (v: string) => void
}

export function InputBox(props: InputBoxProps) {
    return <div className="mb-8 relative">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        <textarea
            name={props.name}
            id={props.name}
            rows={props.rows ?? 8}
            placeholder={props.placeholder}
            onBlur={() => GlobalStateManager.save()}
            onChange={(e) => { props.onChange(e.target.value) }}
            value={props.value}
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
        {props.required && props.value === "" && <Required />}
    </div>
}