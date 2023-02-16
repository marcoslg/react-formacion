import React from 'react'
import ComponenteHijo from './ComponenteHijo'
import ComponenteHijoClase from './ComponenteHijoClase';

const ComponentePadre = () => {
    const texto ="Holas mundo desde padre";
  return (
    <>
    <div>ComponentePadre</div>
    <ComponenteHijo texto={texto}/>
    <ComponenteHijoClase texto={texto} />
    </>
  )
}

export default ComponentePadre