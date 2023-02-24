export interface Tarea {
    id: number,
    texto: string;
    completado: boolean;
    deleted:boolean
  }

  export interface IFormData {
    nombre : string
    apellido: string
    edad: number
    isDeveloper: boolean
    ciudad: string
  }
  export type FormDataValidation<T> = {
    [Property in keyof T]?: string;
  };
  

  export interface RMCharacter {
      id:number
      name:string
      status:string
      species:string
      type:string
      gender:string
      image:string
      created:string
      url:string
  }