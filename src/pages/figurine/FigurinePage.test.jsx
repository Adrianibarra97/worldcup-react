import { render } from "@testing-library/react"
import { FigurinePage } from "./FigurinePage" 
import { emptyFigurine } from "src/services/figurine/Figurine-empty"
import { BrowserRouter } from "react-router-dom"

describe('figurinePage page', () => {
  const guardar = ()=>{
    console.log("test")
  }
  it('smoke test de figurine page.', () => {
    // render(
    //   <BrowserRouter>
    //     <FigurinePage figuritaToShow={emptyFigurine} guardar={guardar}/>
    //   </BrowserRouter>
    // )
  })
})