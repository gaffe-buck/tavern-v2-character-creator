import React from "react";

interface AlternateGreetingProps {
    label: string
    placeholder?: string
    name?: string
    rows?: number
    onDelete: () => void
}

export function AlternateGreeting(props: AlternateGreetingProps) {
    return <div className="mb-4">
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
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
    </div>
}