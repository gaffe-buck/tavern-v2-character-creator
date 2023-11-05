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
import { GlobalStateManager } from "./GlobalStateManager";

export default function CharacterEditor(props: { cardState: State<TavernCardV2> }) {
    const cardState = useHookstate<TavernCardV2>(props.cardState)

    return <Backdrop>
        <MainContent>
            <InsetContent>
                <MainHeader />
                {/* TODO stick me in a component or something */}
                <div className="flex flex-row mb-4">
                    <button
                        onClick={() => GlobalStateManager.clear()}
                        className="text-bold text-lg bg-backdrop p-4 rounded-lg text-interactive select-none cursor-pointer">
                        New Character</button>
                </div>
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