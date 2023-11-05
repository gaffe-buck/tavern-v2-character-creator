import React, { useEffect } from "react";
import { useHookstate } from "@hookstate/core";
import { Invalid } from "./Invalid";
import { GlobalStateManager } from "src/GlobalStateManager";

interface InputExtensionsProps {
    label: string
    placeholder?: string
    name?: string
    rows?: number
    value: Record<string, any>
    onChange: (v: Record<string, any>) => void
}

export function InputExtensions(props: InputExtensionsProps) {
    const localValueState = useHookstate("")

    useEffect(() => {
        if (validate(localValueState.value)) {
            const propsValueString = JSON.stringify(props.value)
            const localValueString = JSON.stringify(localValueState.value)
            if (propsValueString !== localValueString) {
                const localValueStringPretty = JSON.stringify(props.value, null, "\t")
                localValueState.set(localValueStringPretty)
            }
        }
    }, [props.value])

    function localOnChange(v: string) {
        localValueState.set(v)

        if (!validate(localValueState.value)) {
            props.onChange({})
        }
    }

    // only committing to the model on blur
    function localOnBlur(v: string) {
        localValueState.set(v)

        if (validate(localValueState.value)) {
            const record: Record<string, any> = JSON.parse(v)
            props.onChange(record)
        } else {
            props.onChange({})
        }

        GlobalStateManager.save()
    }

    function validate(v: string) {
        try {
            const result: any = JSON.parse(v)

            // Good enough?
            if (typeof result !== "object") return false
            if (Array.isArray(result)) return false
            if (Object.getOwnPropertySymbols(result).length > 0) return false
            return true
        }
        catch (e) {
            return false;
        }
    }

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
            onChange={(e) => localOnChange(e.target.value)}
            onBlur={(e) => localOnBlur(e.target.value)}
            value={localValueState.value}
            className="w-full p-4 text-lg border-2 border-mumble rounded-md bg-inset focus:outline-none placeholder:text-loud text-mumble"
        />
        {!validate(localValueState.value === "" ? "{}" : localValueState.value) && <Invalid />}
    </div>
}