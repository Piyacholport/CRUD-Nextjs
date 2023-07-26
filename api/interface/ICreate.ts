export interface ICreate {
  username: string,
  password: string,
  first_name: string,
  last_name: string,
  email: string, 
  age: number,
  phone_number: string,
  date_of_birth: string

}


export interface UpdateUser {
  id: string,
  password: string,
  first_name: string,
  last_name: string,
  is_active: boolean,
  email: string, 
  age: number,
  phone_number: string,
  date_of_birth: string,
  file:string
}