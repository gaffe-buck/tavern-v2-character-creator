import React from "react";

interface CheckBoxComponentProps {
    label: string
    checkBoxLabel: string
    placeholder?: string
    name?: string
    value: boolean
    onChange: () => void
}

export function CheckBoxComponent(props: CheckBoxComponentProps) {
    return <div className="mb-8">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        <div
            onClick={() => props.onChange()}
            className="flex flex-row items-center hover:cursor-pointer select-none">
            <span
                className="mr-2 material-symbols-outlined">
                {props.value
                    ? "check_box"
                    : "check_box_outline_blank"}
            </span>
            <span>{props.checkBoxLabel}</span>
        </div>
    </div>
}