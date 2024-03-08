import { render } from "@testing-library/react"
import { UserStatusCard } from "./UserStatusCard"
import { Status } from "src/domain/Status"

describe('User Status Card', () => {
  it('smoke test de user status card.', () => {
    //Arrange: 
    const userStatus = new Status('figuritas ofrecidas', 12)
    render(<UserStatusCard statusCard = { userStatus }/>)
  })
})