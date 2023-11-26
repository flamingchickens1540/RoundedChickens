import { Socket } from "socket.io"

export interface TypedRequestBody<T> extends Express.Request {
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

export interface User {
    id: string;
    username: string;
    created_at: string;
}

export interface Conversation {
    id: string;
    name: string;
    user_owner_id: string;
    created_at: string;
}

export interface SocketConnectedUsers {
    [key: string]: {
        socketId: string;
        socket: Socket;
        user: User;
    }
}

export interface SocketSocketIdUserId {
    [key: string]: string
}
