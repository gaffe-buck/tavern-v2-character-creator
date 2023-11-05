import { State, hookstate } from "@hookstate/core";
import { TavernCardV2 } from "./spec";

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