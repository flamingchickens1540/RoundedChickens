import { Socket } from "socket.io"
import { Scout } from "../src/types"
import Elysia from "elysia"

export interface TypedRequestBody<T> extends Elysia.Request {
    body: T
}

export interface TypedRequestQuery<T> extends Express.Request {
    query: T
}

export interface TypedRequestQueryWithBodyAndParams<Params, ReqBody> extends Express.Request {
    body: ReqBody,
    params: Params
}

export interface TypedRequestQueryAndParams<Params, Query> extends Express.Request {
    params: Params
    query: Query,
}

export interface TypedRequestQueryWithParams<Params> extends Express.Request {
    params: Params
}

export interface SocketConnectedUsers {
    [key: string]: {
        socketId: string;
        socket: Socket;
        user: Scout;
    }
}

export interface SocketSocketIdUserId {
    [key: string]: string
}
