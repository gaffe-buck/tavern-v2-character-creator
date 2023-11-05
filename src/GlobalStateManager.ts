import { State, hookstate } from "@hookstate/core";
import { TavernCardV2 } from "./spec";
import * as Cards from 'character-card-utils';
import { Png } from "./Png";

const STORAGE_KEY: string = "cardData"

export class GlobalStateManager {
    static globalState: State<TavernCardV2>
    static timer: number

    static init() {
        const savedCard = localStorage.getItem(STORAGE_KEY)
        if (savedCard) {
            this.globalState = hookstate(JSON.parse(savedCard) as TavernCardV2)
        }
        else {
            this.globalState = hookstate(this.createNewCharacterCard())
        }

        return this.globalState
    }

    static save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.globalState.value))
    }

    static clear() {
        localStorage.setItem(STORAGE_KEY, "")
        this.globalState.set(this.createNewCharacterCard())
    }

    static async import(file: File) {
        if (file.type === "application/json") {
            try {
                const data = JSON.parse(await file.text())

                const result = Cards.safeParseToV2(data)
                if (result.success) {
                    this.globalState.set(result.data)
                    this.save()
                } else throw new SyntaxError()
            }
            catch {
                alert("I couldn't parse that character card, sorry.")
            }
        }
        else if (file.type === "image/png") {
            try {
                const dataString = Png.Parse(await file.arrayBuffer())
                const data = JSON.parse(dataString)

                const result = Cards.safeParseToV2(data)

                if (result.success) {
                    this.globalState.set(result.data)
                    this.save()
                } else throw new SyntaxError()
            }
            catch {
                alert("I couldn't parse that character card, sorry.")
            }
        }
    }

    static async exportPng(file: File) {
        // thanks ZoltanAI
        try {
            const cardData = JSON.stringify(this.globalState.value)
            const oldImageData = await file.arrayBuffer()
            const newImageData = Png.Generate(oldImageData, cardData)
            const newFileName = `${this.globalState.data.name.value || "character"}.png`
            const newFile = new File([newImageData], newFileName, { type: "image/png" })

            const link = window.URL.createObjectURL(newFile)

            const a = document.createElement("a")
            a.setAttribute("download", newFileName)
            a.setAttribute("href", link)
            a.click()
        }
        catch {
            alert("I couldn't export this character card, sorry.")
        }
    }

    static createNewCharacterCard(): TavernCardV2 {
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
}