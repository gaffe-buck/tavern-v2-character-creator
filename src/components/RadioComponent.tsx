import { State, useHookstate } from "@hookstate/core";
import React from "react";

interface RadioComponentProps {
    name?: string
    label: string
    radios: { label: string, value: string }[]
    default: number
}

export function RadioComponent(props: RadioComponentProps) {
    const radioState: State<number> = useHookstate(props.default)

    return <div className="mb-8">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        {props.radios.map((r, i) =>
            <div
                onClick={() => radioState.set(i)}
                className="flex flex-row items-center hover:cursor-pointer select-none mb-2">
                <span
                    className="mr-2 material-symbols-outlined">
                    {i == radioState.value
                        ? "radio_button_checked"
                        : "radio_button_unchecked"}
                </span>
                <span>{r.label}</span>
            </div>
        )}
    </div>
}