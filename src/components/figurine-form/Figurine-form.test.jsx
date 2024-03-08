import { render } from "@testing-library/react"
import { FigurineForm } from "./Figurine-form"
import { emptyFigurine } from "src/services/figurine/Figurine-empty"
import { BrowserRouter } from "react-router-dom"

describe('figurineForm component', () => {
  const guardar = ()=>{
    console.log("test")
  }
  it('smoke test de figurine form.', () => {
    // render(
    //   <BrowserRouter>
    //     <FigurineForm figuritaToShow={emptyFigurine} guardar={guardar}/>
    //   </BrowserRouter>
    // )
  })
})