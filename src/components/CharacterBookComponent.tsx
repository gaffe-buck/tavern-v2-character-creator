import React from "react";
import { State, useHookstate } from "@hookstate/core";
import { CharacterBook } from "src/spec";
import { InputLine } from "./InputLine";
import { InputBox } from "./InputBox";
import { Header2 } from "./Header2";
import { CheckBoxComponent } from "./CheckBoxComponent";
import { CharacterBookEntries } from "./CharacterBookEntries";

export function CharacterBookComponent() {
    const createCharacterBook = (): CharacterBook => {
        return {
            entries: [],
            extensions: {},
        }
    }

    const characterBooksState: State<CharacterBook | null> = useHookstate<CharacterBook | null>(null)

    return <React.Fragment>
        <div
            onClick={() => characterBooksState.set(null)}
            className="text-interactive flex flex-row items-center hover:cursor-pointer select-none justify-between" >
            <Header2> Character Book</Header2>
            {
                characterBooksState.value && <div className="text-sm flex flex-row items-center">
                    <span className="text-lg mr-2 material-symbols-outlined">
                        delete
                    </span>
                </div>
            }
        </div >
        {
            characterBooksState.value !== null &&
            <React.Fragment>
                <InputLine
                    name="lore.name"
                    label="Character Book Name"
                    placeholder="Optional"
                />
                <InputLine
                    name="lore.description"
                    label="Character Book Description"
                    placeholder="Optional"
                />
                <InputLine
                    name="lore.scan_depth"
                    label="Scan Depth"
                    placeholder="Optional"
                />
                <InputLine
                    name="lore.token_budget"
                    label="Token Budget"
                    placeholder="Optional"
                />
                <CheckBoxComponent
                    name="lore.recursive_scanning"
                    label="Recursive Scanning"
                    checkBoxLabel="Enable recursive scanning"
                    placeholder="false"
                />
                <InputBox
                    name="lore.extensions"
                    label="Book Extensions"
                    rows={2}
                    placeholder="{}"
                />
                <CharacterBookEntries />
            </React.Fragment>
        }
        {
            characterBooksState.value === null &&
            <div
                onClick={() => characterBooksState.set(createCharacterBook())}
                className="text-interactive flex flex-row items-center mb-4 hover:cursor-pointer select-none">
                <span className="mr-2 material-symbols-outlined">
                    add
                </span>
                <span>Add a character book</span>
            </div>
        }
    </React.Fragment >
}