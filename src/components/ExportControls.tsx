import { State, none, useHookstate } from "@hookstate/core";
import React from "react";
import { TavernCardV2 } from "src/spec";
import { Header1 } from "./Header1";
import * as Cards from 'character-card-utils';

export function ExportControls(props: { cardState: State<TavernCardV2> }) {
    const outputCard = useHookstate<TavernCardV2>(new TavernCardV2())

    function validate() {
        const result = Cards.v2.safeParse(props.cardState.value)

        if (result.success) outputCard.set(result.data)
        else outputCard.set(none)

        return result.success
    }

    return <div>
        <Header1>Export</Header1>
        <p>Card data is {validate() ? "valid" : "invalid"}</p>
        <pre>{JSON.stringify(props.cardState.value, null, "\t")}</pre>
    </div>
}