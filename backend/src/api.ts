import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger"
// import type { Login } from "../../common/types"

export const api = new Elysia({ prefix: "/api" })
    .use(swagger())
    .post('/scout/login', ({ body, set }) => {
        
    })
    .post('/scout/signup', ({ body, set }) => {

    })
    .post('/scout/submit/match', ({body, set}) => {

    })
    .post('/scout/submit/pit', ({body, set}) => {

    })
    .post('/scout/submit/image', ({body, set}) => {

    })
    .post('/scout/info', ({body, set}) => {

    })
    .post('/admin/new_match', ({ body, set }) => {

    })
    .post('/admin/login', ({ body, set }) => {

    })
    .listen(8001)