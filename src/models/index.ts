import { SetStateAction, Dispatch,  } from "react"

export interface User
{
  username:string
  role:string
}

export interface Settings
{
  darkmode:boolean
}


export interface Context{
  settings: Settings
  user: User
  setSettings: Dispatch<SetStateAction<Settings>>
  toggleDarkMode: () =>  void
  
}

export interface IContadorContext{
  valor:number
  
}


export type NullableContext<T> = {
  [Prop in keyof T]?: T[Prop]
}