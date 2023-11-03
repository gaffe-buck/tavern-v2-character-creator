import * as React from "react"
import { createRoot } from "react-dom/client"
import CharacterEditor from "./CharacterEditor"

const App = () => {
  return (
    <CharacterEditor />
  )
}

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(<App />)