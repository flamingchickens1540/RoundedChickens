import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import staticPlugin from "@elysiajs/static";
import { api } from "./api";
import { env } from "./env";

const app = new Elysia()
            .use(cors())
            .get("/", ({ set }) => {
                set.redirect = "/index.html";
            })
            .use(staticPlugin({ prefix: "/", assets: env.PUBLIC_DIR }));

export default app;