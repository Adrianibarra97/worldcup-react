import { render } from "@testing-library/react"
import { SpinnerLoading } from "./SpinnerLoading"

describe('Spinner Loading', () => {
  it('smoke test de spinner loading.', () => {
    //Arrange: 
    const spinnerActive = true
    render(<SpinnerLoading spinnerActive = { spinnerActive }/>)
  })
})