import React from "react";
import { State, none, useHookstate } from "@hookstate/core";
import { CharacterBook, TavernCardV2 } from "src/spec";
import { InputLine } from "./InputLine";
import { InputBox } from "./InputBox";
import { Header2 } from "./Header2";
import { CheckBoxComponent } from "./CheckBoxComponent";
import { CharacterBookEntries } from "./CharacterBookEntries";
import { InputNumber } from "./InputNumber";

export function CharacterBookComponent(props: { cardState: State<TavernCardV2> }) {
    const createCharacterBook = (): CharacterBook => {
        return {
            entries: [],
            extensions: {},
        }
    }

    const bookState = props.cardState.data.character_book

    return <React.Fragment>
        <div
            onClick={() => bookState.set(none)}
            className="text-interactive flex flex-row items-center hover:cursor-pointer select-none justify-between" >
            <Header2> Character Book</Header2>
            {
                !!bookState.value && <div className="text-sm flex flex-row items-center">
                    <span className="text-lg mr-2 material-symbols-outlined">
                        delete
                    </span>
                </div>
            }
        </div >
        {
            !!bookState.value &&
            <React.Fragment>
                <InputLine
                    name="lore.name"
                    label="Character Book Name"
                    placeholder="Optional"
                    value={bookState.name?.value}
                    onChange={(v) => bookState.name.set(v)}
                />
                <InputLine
                    name="lore.description"
                    label="Character Book Description"
                    placeholder="Optional"
                    value={bookState.description?.value}
                    onChange={(v) => bookState.description.set(v)}
                />
                <InputNumber
                    name="lore.scan_depth"
                    label="Scan Depth"
                    placeholder="Optional"
                    value={bookState.scan_depth.value}
                    optional={true}
                    onChange={(v) => bookState.scan_depth.set(Math.floor(Number(v)))}
                    onDelete={() => bookState.scan_depth.set(none)}
                />
                <InputNumber
                    name="lore.token_budget"
                    label="Token Budget"
                    placeholder="Optional"
                    value={bookState.token_budget.value}
                    optional={true}
                    onChange={(v) => bookState.token_budget.set(Math.floor(Number(v)))}
                    onDelete={() => bookState.token_budget.set(none)}
                />
                <CheckBoxComponent
                    name="lore.recursive_scanning"
                    label="Recursive Scanning"
                    checkBoxLabel="Enable recursive scanning"
                    placeholder="false"
                    value={bookState.recursive_scanning?.value}
                    onChange={() => bookState.recursive_scanning.set(!bookState.recursive_scanning.value)}
                />
                <InputBox
                    name="lore.extensions"
                    label="Book Extensions"
                    rows={2}
                    placeholder="{}"
                    value={"IMPLEMENT ME"}
                    onChange={(v) => console.log("IMPLEMENT ME")}
                />
                <CharacterBookEntries cardState={props.cardState} />
            </React.Fragment>
        }
        {
            !!bookState.value === false &&
            <div
                onClick={() => bookState.set(createCharacterBook())}
                className="text-interactive flex flex-row items-center mb-4 hover:cursor-pointer select-none">
                <span className="mr-2 material-symbols-outlined">
                    add
                </span>
                <span>Add a character book</span>
            </div>
        }
    </React.Fragment >
}