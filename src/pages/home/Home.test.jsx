import { render } from "@testing-library/react"
import { Home } from "./Home"

describe('Home', () => {
  it('smoke test de home.', () => {
    render(<Home/>)
  })
})