// 11/2/23 https://github.com/malfoyslastname/character-card-spec-v2

export class TavernCardV2 {
    spec: string = 'chara_card_v2'
    spec_version: string = '2.0'
    data: {
        name: string
        description: string
        personality: string
        scenario: string
        first_mes: string
        mes_example: string
        creator_notes: string
        system_prompt: string
        post_history_instructions: string
        alternate_greetings: string[]
        character_book?: CharacterBook
        tags: string[]
        creator: string
        character_version: string
        extensions: Record<string, any>
    }
};

export interface CharacterBook {
    name?: string
    description?: string
    scan_depth?: number
    token_budget?: number
    recursive_scanning?: boolean
    extensions: Record<string, any>
    entries: CharacterBookEntry[]
}

export interface CharacterBookEntry {
    keys: string[]
    content: string
    extensions: Record<string, any>
    enabled: boolean
    insertion_order: number
    case_sensitive?: boolean
    name?: string
    priority?: number
    id?: number
    comment?: string
    selective?: boolean
    secondary_keys?: string[]
    constant?: boolean
    position?: 'before_char' | 'after_char'
}