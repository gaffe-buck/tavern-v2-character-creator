import React from "react";
import { Header2 } from "./Header2";
import { InputLine } from "./InputLine";
import { InputBox } from "./InputBox";
import { AlternateGreetings } from "./AlternateGreetings";

export function EssentialInformation() {
    return <React.Fragment>
        <Header2>Essential Information</Header2>
        <InputLine
            name="name"
            label="Character Name"
            placeholder="Keep it short! The user will probably have to type it a lot."
        />
        <InputBox
            name="description"
            label="Detailed Description"
            placeholder="Will be included in every prompt. A detailed description of the most important information the model needs to know about the character. A thorough description is somewhere in the range of 300-800 tokens, and probably should not exceed 1000 tokens."
        />
        <InputLine
            name="personality"
            label="Personality"
            placeholder="A very brief summary of the character's personality."
        />
        <InputLine
            name="scenario"
            label="Scenario"
            placeholder="A very brief summary of the current circumstances to the conversation."
        />
        <InputBox
            name="first_mes"
            label="Greeting"
            placeholder="A good first message can make a huge difference in the length and quality of the bot's responses. Write this greeting as if the bot had written it. Avoid describing the user's actions and dialogue too much or the bot might be more likely to act and speak for the user in subsequent responses."
        />
        <InputBox
            name="mes_example"
            label="Example Conversation"
            rows={12}
            placeholder={`<START>
{{user}}: "How do example messages work?"
{{char}}: *He does something interesting, then another interesting thing.* "Oh, hello! These example messages are very important. But I can't tell you why!" *{{char}} does more interesting things, because this example message will influence the style, length, and quality of the bot's responses until the context fills up.*
<START>
{{user}}: "Are the example messages sent with every prompt?"
{{char}}: "Not every prompt, just until the context fills up with your actual conversation." *{{char}} thinks about how just two or three good example conversations like this placeholder text, and formatted the same way, can drastically improve the quality of your bot.* 
`}
        />
        <AlternateGreetings />
    </React.Fragment>
}