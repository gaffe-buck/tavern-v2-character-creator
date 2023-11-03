import React from "react";
import { Header3 } from "./Header3";
import { State, useHookstate } from "@hookstate/core";
import { CharacterBook } from "src/spec";
import { InputLine } from "./InputLine";
import { InputBox } from "./InputBox";

export function CharacterBookComponent() {
    const createCharacterBook = (): CharacterBook => {
        return {
            entries: [],
            extensions: {},
        }
    }

    const characterBooksState: State<CharacterBook | null> = useHookstate<CharacterBook | null>(null)

    return <React.Fragment>
        <Header3>Character Book</Header3>
        {
            characterBooksState.value !== null &&
            <React.Fragment>
                <InputLine
                    name="lore.name"
                    label="Book Name"
                    placeholder="Optional"
                />
                <InputLine
                    name="lore.description"
                    label="Book Description"
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
                <InputLine
                    name="lore.recursive_scanning"
                    label="Recursive Scanning"
                    placeholder="false"
                />
                <InputBox
                    name="lore.extensions"
                    label="Book Extensions"
                    rows={4}
                    placeholder="{}"
                />
            </React.Fragment>
            // characterBooksState.value.map((ag, i) => <AlternateGreeting
            //     key={i}
            //     name={`alternate_greeting_${i}`}
            //     label={`Alternate Greeting ${i + 1}`}
            //     rows={12}
            //     onDelete={() => characterBooksState[i].set(none)}
            //     placeholder="A good first message can make a huge difference in the length and quality of the bot's responses. Write this greeting as if the bot had written it. Avoid describing the user's actions and dialogue too much or the bot might act and speak for the user in subsequent responses." />)
        }
        {
            characterBooksState.value === null
                ? <div
                    onClick={() => characterBooksState.set(createCharacterBook())}
                    className="text-interactive flex flex-row items-center mb-4 hover:cursor-pointer select-none">
                    <span className="mr-2 material-symbols-outlined">
                        add
                    </span>
                    <span>Add a character book</span>
                </div>
                : <div
                    onClick={() => characterBooksState.set(null)}
                    className="text-interactive flex flex-row items-center mb-4 hover:cursor-pointer select-none">
                    <span className="mr-2 material-symbols-outlined">
                        delete
                    </span>
                    <span>Delete the character book</span>
                </div>
        }
    </React.Fragment>
}