import { State, none } from "@hookstate/core";
import React from "react";
import { CharacterBookEntry } from "src/spec";
import { CheckBoxComponent } from "./CheckBoxComponent";
import { InputBox } from "./InputBox";
import { InputLine } from "./InputLine";
import { RadioComponent } from "./RadioComponent";
import { InputNumber } from "./InputNumber";
import { InputTags } from "./InputTags";

interface CharacterBookEntryComponentProps {
    name: string,
    label: string,
    entry: State<CharacterBookEntry>,
    onDelete: () => void
}

export function CharacterBookEntryComponent(props: CharacterBookEntryComponentProps) {
    function getPositionRadioValue(): number {
        if (props.entry.position.value === "before_char") return 1
        if (props.entry.position.value === "after_char") return 2
        return 0
    }

    function setPositionRadioValue(i: number) {
        if (i === 0) props.entry.position.set(none)
        if (i === 1) props.entry.position.set("before_char")
        if (i === 2) props.entry.position.set("after_char")
    }

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
            value={props.entry.name.value}
            onChange={(v) => props.entry.name.set(v)}
        />
        <InputTags
            name={`${props.name}.keys`}
            label="Keys"
            placeholder="comma, separated, list, of, keys"
            required={true}
            value={props.entry.nested("keys").value}
            onChange={(v) => props.entry.nested("keys").set(v)}
        />
        <InputTags
            name={`${props.name}.secondary_keys`}
            label="Secondary Keys"
            placeholder="optional, comma, separated, list, of, keys"
            value={props.entry.secondary_keys.value}
            onChange={(v) => props.entry.secondary_keys.set(v)}
        />
        <InputBox
            name={`${props.name}.content`}
            label="Entry Content"
            rows={3}
            required={true}
            placeholder="The lore for this entry's keys goes here."
            value={props.entry.content.value}
            onChange={(v) => props.entry.content.set(v)}
        />
        <InputBox
            name={`${props.name}.extensions`}
            label="Entry Extensions"
            rows={2}
            placeholder="{}"
            value={"IMPLEMENT ME"}
            onChange={(v) => console.log("IMPLEMENT ME!")}
        />
        <CheckBoxComponent
            name={`${props.name}.enabled`}
            label="Enabled"
            checkBoxLabel="Enable this entry"
            value={props.entry.enabled.value}
            onChange={() => props.entry.enabled.set(!props.entry.enabled.value)}
        />
        <CheckBoxComponent
            name={`${props.name}.case_sensitive`}
            label="Case Sensitive"
            checkBoxLabel="Enforce case sensitivity when parsing keys"
            value={props.entry.case_sensitive.value}
            onChange={() => props.entry.case_sensitive.set(!props.entry.case_sensitive.value)}
        />
        <InputNumber
            name={`${props.name}.insertion_order`}
            label="Insertion Order"
            placeholder="0"
            value={props.entry.insertion_order.value}
            onChange={(v) => props.entry.insertion_order.set(Math.floor(Number(v)))}
            onDelete={() => props.entry.insertion_order.set(none)}
        />
        <InputNumber
            name={`${props.name}.priority`}
            label="Priority"
            placeholder="Optional"
            value={props.entry.priority.value}
            optional={true}
            onChange={(v) => props.entry.priority.set(Math.floor(Number(v)))}
            onDelete={() => props.entry.priority.set(none)}
        />
        <InputNumber
            name={`${props.name}.id`}
            label="Id"
            placeholder="Optional"
            value={props.entry.id.value}
            optional={true}
            onChange={(v) => props.entry.id.set(Math.floor(Number(v)))}
            onDelete={() => props.entry.id.set(none)}
        />
        <InputLine
            name={`${props.name}.comment`}
            label="Comment"
            placeholder="Optional"
            value={props.entry.name.value}
            onChange={(v) => props.entry.name.set(v)}
        />
        <CheckBoxComponent
            name={`${props.name}.selective`}
            label="Selective"
            checkBoxLabel="Require a key from both keys and secondary keys to trigger this entry"
            value={props.entry.selective.value}
            onChange={() => props.entry.selective.set(!props.entry.selective.value)}
        />
        <CheckBoxComponent
            name={`${props.name}.constant`}
            label="Constant"
            checkBoxLabel="Always insert this entry into the prompt."
            value={props.entry.constant.value}
            onChange={() => props.entry.constant.set(!props.entry.constant.value)}
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
            value={getPositionRadioValue()}
            onChange={(i: number) => setPositionRadioValue(i)}
        />
    </div>
}