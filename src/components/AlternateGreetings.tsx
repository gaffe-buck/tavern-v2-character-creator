import React from "react";
import { Header3 } from "./Header3";
import { State, none } from "@hookstate/core";
import { AlternateGreeting } from "./AlternateGreeting";

export function AlternateGreetings(props: { alternateGreetingsState: State<string[]> }) {
    return <React.Fragment>
        <Header3>Alternate Greetings</Header3>
        {
            props.alternateGreetingsState.value.map((ag, i) => <AlternateGreeting
                key={i}
                name={`alternate_greeting_${i}`}
                label={`Alternate Greeting ${i + 1}`}
                rows={12}
                value={props.alternateGreetingsState[i].value}
                onDelete={() => props.alternateGreetingsState[i].set(none)}
                onChange={(v) => props.alternateGreetingsState[i].set(v)}
                placeholder="A good first message can make a huge difference in the length and quality of the bot's responses. Write this greeting as if the bot had written it. Avoid describing the user's actions and dialogue too much or the bot might act and speak for the user in subsequent responses." />)
        }
        <div
            onClick={() => props.alternateGreetingsState.merge([""])}
            className="text-interactive flex flex-row items-center mb-4 hover:cursor-pointer select-none">
            <span className="mr-2 material-symbols-outlined">
                add
            </span>
            <span>Add an alternate greeting</span>
        </div>
    </React.Fragment>
}