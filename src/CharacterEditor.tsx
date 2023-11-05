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
import { MainMenu } from "./components/MainMenu";

export default function CharacterEditor(props: { cardState: State<TavernCardV2> }) {
    const cardState = useHookstate<TavernCardV2>(props.cardState)

    return <Backdrop>
        <MainContent>
            <InsetContent>
                <MainHeader />
                <MainMenu />
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