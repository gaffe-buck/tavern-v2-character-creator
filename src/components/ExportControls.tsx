import { State, none, useHookstate } from "@hookstate/core";
import React, { useRef } from "react";
import { TavernCardV2 } from "src/spec";
import * as Cards from 'character-card-utils';
import { Header3 } from "./Header3";
import { Header2 } from "./Header2";
import { GlobalStateManager } from "src/GlobalStateManager";

export function ExportControls(props: { cardState: State<TavernCardV2> }) {
    const outputCard = useHookstate<TavernCardV2>(new TavernCardV2())
    const downloadUrlState = useHookstate<string>("")

    function validate() {
        const result = Cards.v2.safeParse(props.cardState.value)

        if (result.success) {
            outputCard.set(result.data)

            const encodedData = encodeURIComponent(JSON.stringify(result.data))
            const downloadUrl = `data:application/json;charset=utf-8,${encodedData}`
            downloadUrlState.set(downloadUrl)
        }
        else {
            downloadUrlState.set(none)
            outputCard.set(none)
        }

        return result.success
    }

    function getWarnings(): string[] {
        const warnings = []
        const data = props.cardState.data.value

        if (data.name === "") warnings.push("You forgot to give this character name!")
        if (data.description === "") warnings.push("This character is missing a description!")
        if (data.personality === "") warnings.push("Consider adding a short personality summary.")
        if (data.scenario === "") warnings.push("Consider adding a short scenario summary.")
        if (data.first_mes === "") warnings.push("This character is missing a first message!")
        if (data.mes_example === "") warnings.push("This character is missing example messages!")
        if (data.creator === "") warnings.push("Are you ashamed of this card? You left the creator field blank.")

        if (data.character_book) {
            if (!data.character_book.name) warnings.push("You should name the character book.")
            if (data.character_book.entries.length === 0) warnings.push("Your character book doesn't have any entries!")

            for (let entry of data.character_book.entries) {
                if (!entry.name) warnings.push("One of your character book entries doesn't have a name.")
                if (entry.keys.length === 0) warnings.push("One of your character book entries has no keys!")
                if (!entry.content) warnings.push("One of your character book entries doesn't have any content!")
            }
        }

        for (let altGreeting of data.alternate_greetings) {
            if (altGreeting === "") warnings.push("You left an alternate greeting blank!")
        }

        return warnings
    }

    function handleFileInputClick() {
        fileInputRef.current.click()
    }

    function handleJsonExportClick() {
        exportLinkRef.current.click()
    }

    async function fileOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        await GlobalStateManager.exportPng(e.target.files[0])
    }

    const valid = validate()
    const warnings: string[] = getWarnings()
    const fileInputRef = useRef(null)
    const exportLinkRef = useRef(null)

    return <div className="mb-8">
        <Header2>Export</Header2>
        {
            warnings.length > 0 &&
            <div className="mb-4">
                <Header3>Warnings</Header3>
                <ul className="block ml-8">
                    {warnings.map((w, i) => <li key={i}>&#x2022; {w}</li>)}
                </ul>
            </div>
        }
        {
            valid &&
            <React.Fragment>
                <Header3>Download your character</Header3>
                <div className="flex flex-row justify-evenly my-8">
                    <button
                        onClick={() => handleJsonExportClick()}
                        className="m-4 text-bold text-lg bg-backdrop p-4 rounded-lg text-interactive select-none cursor-pointer">
                        Download your card in JSON format</button>
                    <a
                        className="hidden"
                        href={downloadUrlState.value}
                        download={`${props.cardState.data.name.value}.json`}
                        ref={exportLinkRef}
                    >
                        Download your character in JSON format
                    </a>
                    <button
                        onClick={() => handleFileInputClick()}
                        className="m-4 text-bold text-lg bg-backdrop p-4 rounded-lg text-interactive select-none cursor-pointer">
                        Embed card into PNG</button>
                    <input
                        className="hidden"
                        id="export"
                        name="export"
                        accept="image/png, application/json"
                        onChange={(e) => fileOnChange(e)}
                        type="file"
                        ref={fileInputRef}
                    />
                </div>
            </React.Fragment>
        }
    </div>
}