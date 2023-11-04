import React from "react";
import { Backdrop } from "./components/Backdrop";
import { MainContent } from "./components/MainContent";
import { MainHeader } from "./components/MainHeader";
import { InsetContent } from "./components/InsetContent";
import { EssentialInformation } from "./components/EssentialInformation";
import { CharacterBookComponent } from "./components/CharacterBookComponent";
import { TavernCardV2 } from "./spec";
import { State, useHookstate } from "@hookstate/core";
import { MetaDataComponent } from "./components/MetaDataComponent";
import { Footer } from "./components/Footer";
import { ExportControls } from "./components/ExportControls";

export default function CharacterEditor() {
    const createNewCharacterCard = (): TavernCardV2 => {
        const newCard = new TavernCardV2()

        newCard.data = {
            name: "",
            description: "",
            personality: "",
            scenario: "",
            first_mes: "",
            mes_example: "",
            creator_notes: "",
            system_prompt: "",
            post_history_instructions: "",
            alternate_greetings: [],
            tags: [],
            creator: "",
            character_version: "",
            extensions: {},
        }

        return newCard
    }

    const cardState: State<TavernCardV2> = useHookstate<TavernCardV2>(createNewCharacterCard())

    return <Backdrop>
        <MainContent>
            <InsetContent>
                <MainHeader />
                <form>
                    <EssentialInformation cardState={cardState} />
                    <CharacterBookComponent cardState={cardState} />
                    <MetaDataComponent cardState={cardState} />
                </form>
                <ExportControls cardState={cardState} />
            </InsetContent>
            <Footer />
        </MainContent>
    </Backdrop >
}