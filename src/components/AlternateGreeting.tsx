import React from "react";
import { Required } from "./Required";

interface AlternateGreetingProps {
    label: string
    placeholder?: string
    name?: string
    rows?: number
    value: string
    onDelete: () => void
    onChange: (v: string) => void
}

export function AlternateGreeting(props: AlternateGreetingProps) {
    return <div className="mb-8 relative">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {<div className="flex flex-row items-center justify-between">
                <span>{props.label}</span>
                <span
                    onClick={() => props.onDelete()}
                    className="select-none text-interactive text-lg mr-2 material-symbols-outlined hover:cursor-pointer">
                    delete
                </span>
            </div>}
        </label>
        <textarea
            name={props.name}
            id={props.name}
            rows={props.rows ?? 8}
            placeholder={props.placeholder}
            maxLength={100}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
        {props.value === "" && <Required />}
    </div>
}