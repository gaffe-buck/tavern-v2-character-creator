import React from "react";
import { Header2 } from "./Header2";
import { InputLine } from "./InputLine";
import { InputBox } from "./InputBox";
import { State } from "@hookstate/core";
import { TavernCardV2 } from "src/spec";
import { InputTags } from "./InputTags";
import { InputExtensions } from "./InputExtensions";

export function MetaDataComponent(props: { cardState: State<TavernCardV2> }) {
    return <React.Fragment>
        <Header2>Creator and Discovery</Header2>
        <InputLine
            name="creator"
            label="Creator"
            placeholder="You!"
            required={true}
            value={props.cardState.data.creator.value}
            onChange={(v) => props.cardState.data.creator.set(v)}
        />
        <InputBox
            name="creator_notes"
            label="Creator Notes"
            rows={4}
            placeholder="The text in this field is used for 'discoverability.' The first line might be a very simple description of the bot - 'A friendly clown with a knife, in a dark alley'. Expect most users to only see that first line. The rest of this value can be used for important notes the user may find helpful to get the best experience from the bot."
            value={props.cardState.data.creator_notes.value}
            onChange={(v) => props.cardState.data.creator_notes.set(v)}
        />
        <InputTags
            name="tags"
            label="Tags"
            placeholder="comma, separated, list, of, tags"
            value={props.cardState.data.tags.value}
            onChange={(v: string[]) => props.cardState.data.tags.set(v)}
        />
        <InputLine
            name="character_version"
            label="Character Version"
            placeholder="1.0.0"
            value={props.cardState.data.character_version.value}
            onChange={(v) => props.cardState.data.character_version.set(v)}
        />
        <Header2>Advanced Settings</Header2>
        <InputBox
            name="system_prompt"
            label="System Prompt"
            placeholder="Leave this blank unless you have a reason to populate it."
            rows={1}
            value={props.cardState.data.system_prompt.value}
            onChange={(v) => props.cardState.data.system_prompt.set(v)}
        />
        <InputBox
            name="post_history_instructions"
            label="Jailbreak (Post History Instructions)"
            placeholder="Leave this blank unless you have a reason to populate it."
            rows={1}
            value={props.cardState.data.post_history_instructions.value}
            onChange={(v) => props.cardState.data.post_history_instructions.set(v)}
        />
        <InputExtensions
            name="extensions"
            label="Extensions"
            rows={2}
            placeholder="{}"
            value={props.cardState.data.extensions.value}
            onChange={(v: Record<string, any>) => props.cardState.data.extensions.set(v)}
        />
    </React.Fragment>
}