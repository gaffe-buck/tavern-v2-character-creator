import React, { useRef } from "react";
import { GlobalStateManager } from "src/GlobalStateManager";

export function MainMenu() {
    const fileInputRef = useRef(null)

    function handleClick() {
        fileInputRef.current.click()
    }

    async function fileOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        await GlobalStateManager.import(e.target.files[0])
    }

    return <div className="flex flex-row mb-4">
        <button
            onClick={() => GlobalStateManager.clear()}
            className="m-4 text-bold text-lg bg-backdrop p-4 rounded-lg text-interactive select-none cursor-pointer">
            New Character</button>
        <button
            onClick={() => handleClick()}
            className="m-4 text-bold text-lg bg-backdrop p-4 rounded-lg text-interactive select-none cursor-pointer">
            Import from PNG or JSON</button>
        <input
            className="hidden"
            id="import"
            name="import"
            accept="image/png, application/json"
            onChange={(e) => fileOnChange(e)}
            type="file"
            ref={fileInputRef}
        />
    </div>
}