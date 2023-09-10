import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { logger } from '@bogeychan/elysia-logger'

export const app = new Elysia()
  .use(logger())
  .get("/", () => "Hello Elysia")
  .get("/hello", ({ query }) => `Hi ${query.name}!`, {
    query: t.Object({
      name: t.String()
    })
  }) 

if (process.env.NODE_ENV !== "production") {
  app.use(swagger())
}
