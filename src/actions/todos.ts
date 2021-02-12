import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
    id: number
    title: string
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos
    payload: Todo[]
}

export interface RemoveTodoAction {
    type: ActionTypes.removeTodo
    payload: number
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const { data } = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos, 
            payload: data
        })
    }
}

export const removeTodo = (id: number): RemoveTodoAction => {
    return {
        type: ActionTypes.removeTodo, 
        payload: id
    }
}
