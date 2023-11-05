import * as React from "react"
import { createRoot } from "react-dom/client"
import CharacterEditor from "./CharacterEditor"
import { GlobalStateManager } from "./GlobalStateManager"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<CharacterEditor cardState={GlobalStateManager.init()} />)