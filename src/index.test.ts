import { expect, test } from 'bun:test'
import { app } from './routes'

test('Test /hello route', async () => {
    const msg = await app.handle(
        new Request('http://localhost/hello?name=Ethan')
    ).then(resp => resp.text())

    expect(msg).toBe('Hi Ethan!')
})