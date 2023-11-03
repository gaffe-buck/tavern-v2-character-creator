import React from "react";
import { Backdrop } from "./components/Backdrop";
import { MainContent } from "./components/MainContent";
import { Header2 } from "./components/Header2";
import { MainHeader } from "./components/MainHeader";
import { InsetContent } from "./components/InsetContent";
import { InputLine } from "./components/InputLine";
import { EssentialInformation } from "./components/EssentialInformation";
import { InputBox } from "./components/InputBox";
import { CharacterBookComponent } from "./components/CharacterBookComponent";

export default function CharacterEditor() {
    return <Backdrop>
        <MainContent>
            <InsetContent>
                <MainHeader />
                <form>
                    <EssentialInformation />
                    <CharacterBookComponent />
                    <Header2>Creator and Discovery</Header2>
                    <InputLine
                        name="name"
                        label="Creator"
                        placeholder="You!"
                    />
                    <InputBox
                        name="creator_notes"
                        label="Creator Notes"
                        rows={4}
                        placeholder="The text in this field is used for 'discoverability.' The first line might be a very simple description of the bot - 'A friendly clown with a knife, in a dark alley'. Expect most users to only see that first line. The rest of this value can be used for important notes the user may find helpful to get the best experience from the bot."
                    />
                    <InputLine
                        name="tags"
                        label="Tags"
                        placeholder="comma, separated, list, of, tags"
                    />
                    <InputLine
                        name="character_version"
                        label="Character Version"
                        placeholder="1.0.0"
                    />
                    <Header2>Advanced Settings</Header2>
                    <InputLine
                        name="system_prompt"
                        label="System Prompt"
                        placeholder="Leave this blank unless you have a reason to populate it."
                    />
                    <InputLine
                        name="post_history_instructions"
                        label="Jailbreak"
                        placeholder="Leave this blank unless you have a reason to populate it."
                    />
                    <InputBox
                        name="extensions"
                        label="Extensions"
                        rows={2}
                        placeholder="{}"
                    />
                </form>
            </InsetContent>
        </MainContent>
    </Backdrop >
}