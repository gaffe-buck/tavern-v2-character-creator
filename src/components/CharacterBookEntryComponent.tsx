import { ImmutableObject } from "@hookstate/core";
import React from "react";
import { CharacterBookEntry } from "src/spec";
import { CheckBoxComponent } from "./CheckBoxComponent";
import { InputBox } from "./InputBox";
import { InputLine } from "./InputLine";
import { RadioComponent } from "./RadioComponent";

interface CharacterBookEntryComponentProps {
    name: string,
    label: string,
    entry: ImmutableObject<CharacterBookEntry>,
    onDelete: () => void
}

export function CharacterBookEntryComponent(props: CharacterBookEntryComponentProps) {
    return <div className="mb-4">
        <label
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
        <InputLine
            name={`${props.name}.name`}
            label="Name"
            placeholder="The name of this entry. Not used in prompt"
        />
        <InputLine
            name={`${props.name}.keys`}
            label="Keys"
            placeholder="comma, separated, list, of, keys"
        />
        <InputLine
            name={`${props.name}.secondary_keys`}
            label="Secondary Keys"
            placeholder="comma, separated, list, of, keys"
        />
        <InputBox
            name={`${props.name}.content`}
            label="Entry Content"
            rows={3}
            placeholder="The lore for this entry's keys goes here."
        />
        <InputBox
            name={`${props.name}.extensions`}
            label="Entry Extensions"
            rows={2}
            placeholder="{}"
        />
        <CheckBoxComponent
            name={`${props.name}.enabled`}
            label="Enabled"
            checkBoxLabel="Enable this entry"
        />
        <CheckBoxComponent
            name={`${props.name}.case_sensitive`}
            label="Case Sensitive"
            checkBoxLabel="Enforce case sensitivity when parsing keys"
        />
        <InputLine
            name={`${props.name}.insertion_order`}
            label="Insertion Order"
            placeholder="0"
        />
        <InputLine
            name={`${props.name}.priority`}
            label="Priority"
            placeholder="0"
        />
        <InputLine
            name={`${props.name}.id`}
            label="Id"
            placeholder="Optional"
        />
        <InputLine
            name={`${props.name}.comment`}
            label="Comment"
            placeholder="Optional"
        />
        <CheckBoxComponent
            name={`${props.name}.selective`}
            label="Selective"
            checkBoxLabel="Require a key from both keys and secondary keys to trigger this entry"
        />
        <CheckBoxComponent
            name={`${props.name}.constant`}
            label="Constant"
            checkBoxLabel="Always insert this entry into the prompt."
        />
        <RadioComponent
            name={`${props.name}.position`}
            label="Position"
            default={0}
            radios={[
                { label: "Client default", value: "" },
                { label: "Before character definitions", value: "before_char" },
                { label: "After character definitions", value: "after_char" },
            ]}
        />
    </div>
}