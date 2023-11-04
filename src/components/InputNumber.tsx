import React from "react";
import { Required } from "./Required";

interface InputNumberProps {
    label: string
    placeholder?: string
    name?: string
    value: number | undefined
    optional?: boolean
    onChange: (v: number) => void
    onDelete?: () => void
}

export function InputNumber(props: InputNumberProps) {
    function localOnChange(v: string) {
        const newValue = Number(v)
        if (isNaN(newValue)) props.onDelete()
        else props.onChange(newValue)
    }

    return <div className="mb-8 relative">
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
            type="text"
            onChange={(e) => localOnChange(e.target.value)}
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
        {!props.optional && isNaN(props.value) && <Required />}
    </div >
}