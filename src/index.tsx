import * as React from "react"
import { render } from "react-dom"
import CharacterEditor from "./CharacterEditor"

const App = () => {
  return (
    <CharacterEditor />
  )
}

render(<App />, document.getElementById("root"))