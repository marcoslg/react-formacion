import React, { Component } from "react";

interface IComponenteHijoClase {
  texto: string;
}

export default class ComponenteHijoClase extends Component<IComponenteHijoClase> {
  render() {
    const { texto } = this.props;
    console.log(this.props);
    return <div>hijo clase {texto}</div>;
  }
}
