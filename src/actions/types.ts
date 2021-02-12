import { FetchTodosAction , RemoveTodoAction } from "./todos";

export enum ActionTypes {
    fetchTodos, 
    removeTodo
}

export type Action = FetchTodosAction | RemoveTodoAction