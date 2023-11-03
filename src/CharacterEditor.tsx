import React from "react";
import { Backdrop } from "./components/backdrop";
import { MainContent } from "./components/MainContent";
import { Header2 } from "./components/Header2";
import { MainHeader } from "./components/MainHeader";

export default function CharacterEditor() {
    return <Backdrop>
        <MainContent>
            <MainHeader />
            <Header2>Essential Information</Header2>
            <div className="p-4 bg-darker border-darker border-2 rounded-lg text-mumble">
                <label className="block text-2xl font-bold text-mumble mb-4">Character Name</label>
                <input className="w-1/2 p-4 text-lg rounded-md bg-dead focus:outline-none placeholder:text-mumble text-loud" placeholder="This is placeholder text" type="text" maxLength={100} />
            </div>
        </MainContent>
    </Backdrop >
}