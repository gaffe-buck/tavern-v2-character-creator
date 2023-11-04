import React, { useEffect } from "react";
import { Required } from "./Required";
import { ImmutableArray, useHookstate } from "@hookstate/core";

interface InputTagsProps {
    label: string
    placeholder?: string
    name?: string
    required?: boolean
    value: ImmutableArray<string> | string[]
    onChange: (v: string[]) => void
}

export function InputTags(props: InputTagsProps) {
    const localValueState = useHookstate("")

    useEffect(() => {
        const newValue = parseTags(props.value ?? [])
        if (newValue !== parseTags(createTagsFromText(localValueState.value))) {
            localValueState.set(newValue)
        }
    }, [props.value])

    function localOnChange(v: string) {
        localValueState.set(v)

        const tags = createTagsFromText(v)
        props.onChange(tags)
    }

    function createTagsFromText(v: string): string[] {
        const rawTags = v.split(",")
        const sanitizedTags = rawTags.map(t => t.trim()).filter(t => t !== "")

        return sanitizedTags
    }

    function parseTags(tags: ImmutableArray<string> | string[]): string {
        const tagString = tags.join(", ")

        return tagString
    }

    return <div className="mb-8 relative">
        <label
            htmlFor={props.name}
            className="block text-xl font-bold text-mumble mb-4">
            {props.label}
        </label>
        <input
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={localValueState.value}
            onChange={(e) => { localOnChange(e.target.value) }}
            type="text"
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
        {props.required && props.value.length === 0 && <Required />}
    </div>
}