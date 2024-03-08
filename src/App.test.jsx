import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
    it('App smoke test', () => {
        render(<App />)
    })
})