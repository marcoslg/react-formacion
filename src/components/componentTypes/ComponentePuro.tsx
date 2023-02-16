import React from "react";

/*
solo se vuelve a renderizar
 cuando cambia el estado o los props
 es decir cuando el stado propio cambia o el padre
 le actualiza los datos. Si el padre se renderiza pero
 los parametros al hijo no cambian, este no se vuelve a 
 renderizar 
*/
class ComponentePuro extends React.PureComponent
{
    render() {
        return (
            <div> Componente puro</div>
        )
    }
}