export interface Todocreate {
    title: string
    note: string
    reminder_date: string
    reminder_time: string
    status: string

}
export interface UpdateTodo extends Todocreate {
    tid: number
}

export interface DelTodo {
    tid: number

}