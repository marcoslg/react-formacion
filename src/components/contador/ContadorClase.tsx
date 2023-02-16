import React, { Component } from "react";

interface IContadorClaseProps {
  initialValue?: number;
}

interface IContadorState {
  valor: number;
}

export default class ContadorClase extends Component<
  IContadorClaseProps,
  IContadorState
> {
  constructor(props: IContadorClaseProps) {
    super(props);
    this.state = {
      valor: props.initialValue || 0,
    };
  }

  suma(cant: number = 1) {
    this.setState({
      ...this.state,
      valor: this.state.valor + cant,
    });
  }

  resta(cant: number = 1) {
    this.setState({
      ...this.state,
      valor: this.state.valor - cant,
    });
  }
  reset = () => {
    this.setState({
      ...this.state,
      valor: 0,
    });
  };

  render() {
    const valor = this.state.valor;
    return (
      <>
        <h3>tipo clase valor = {valor}</h3>
        <div>
          <button onClick={() => this.resta(5)}>Menos 5 </button>
          <button onClick={() => this.resta(1)}>Menos</button>
          <button onClick={() => this.suma()}>Mas</button>
          <button onClick={() => this.suma(5)}>Mas 5 </button>
          <button onClick={this.reset}>Reset asd s</button>
        </div>
      </>
    );
  }
}
