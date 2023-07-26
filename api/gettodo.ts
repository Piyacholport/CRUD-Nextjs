import api from './index'

export const GetTodoController = () => {
  return {
    getDataTodo: async () => {
      return await api.get(`/v1/todo/list`)
    },
    GetDataTodobyID: async ({ tid }: any) => {
      return await api.get(`/v1/todo/search?tid=${tid}`)
    },
  }
}