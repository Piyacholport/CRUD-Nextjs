import api from './index'
import { Todocreate, UpdateTodo, DelTodo } from './interface/todo'

export const TodoController = () => {
    return {

        Createtodo: async ({ title, note, reminder_date, reminder_time }: Todocreate) => {
            return await api.post(`/v1/todo`, { title, note, reminder_date, reminder_time })
        },
        Updatetodo: async ({ tid, note}: UpdateTodo) => {
            return await api.put(`/v1/todo`, {tid,note})
        },
        Deletetodo: async ({ tid }: DelTodo) => {
            return await api.delete(`/v1/todo/${tid}`)
        },
    }
}