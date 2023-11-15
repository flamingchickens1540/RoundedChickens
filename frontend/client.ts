import { edenTreaty } from "@elysiajs/eden"
import type { App } from "../backend/src/index"

const app = edenTreaty<App>('http://localhost:8001')

const {  } = await app.