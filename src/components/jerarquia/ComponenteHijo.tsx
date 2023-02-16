import React from 'react'

interface IComponenteHijo {
  texto: string
}

//const ComponenteHijo = ({ texto } : { texto:string }) => {
const ComponenteHijo = ({ texto } : IComponenteHijo) => {
    
    return (
      <div>{ texto }</div>
    )
  }
  
  export default ComponenteHijo