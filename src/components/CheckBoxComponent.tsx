import { State, useHookstate } from "@hookstate/core";
import React from "react";

interface CheckBoxComponentProps {
    label: string
    checkBoxLabel: string
    placeholder?: string
    name?: string
}

export function CheckBoxComponent(props: CheckBoxComponentProps) {
    const checkState: State<boolean> = useHookstate(false)

    return <div className="mb-8">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        <div
            onClick={() => checkState.set(!checkState.value)}
            className="flex flex-row items-center hover:cursor-pointer select-none">
            <span
                className="mr-2 material-symbols-outlined">
                {checkState.value
                    ? "check_box"
                    : "check_box_outline_blank"}
            </span>
            <span>{props.checkBoxLabel}</span>
        </div>
    </div>
}