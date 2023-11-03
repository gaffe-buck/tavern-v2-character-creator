import React from "react";
import { Header3 } from "./Header3";
import { State, none } from "@hookstate/core";
import { CharacterBookEntry, TavernCardV2 } from "src/spec";
import { CharacterBookEntryComponent } from "./CharacterBookEntryComponent";

export function CharacterBookEntries(props: { cardState: State<TavernCardV2> }) {
    const createCharacterBookEntry = (): CharacterBookEntry => {
        return {
            keys: [],
            content: "",
            extensions: {},
            enabled: true,
            insertion_order: 0,
        }
    }

    const entriesState = props.cardState.data.character_book.entries

    return <React.Fragment>
        <Header3>Character Book Entries</Header3>
        {
            entriesState.map((cbe, i) => <CharacterBookEntryComponent
                key={i}
                name={`character_book_entry_${i}`}
                label={`Character Book Entry ${i + 1}`}
                onDelete={() => entriesState[i].set(none)}
                entry={cbe} />)
        }
        <div
            onClick={() => entriesState.merge([createCharacterBookEntry()])}
            className="text-interactive flex flex-row items-center mb-4 hover:cursor-pointer select-none">
            <span className="mr-2 material-symbols-outlined">
                add
            </span>
            <span>Add a character book entry</span>
        </div>
    </React.Fragment>
}