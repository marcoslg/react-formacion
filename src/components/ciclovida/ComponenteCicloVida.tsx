import React, { Component } from "react";

export default class ComponenteCicloVida extends Component {
  state = {
    toggle: false,
  };
  UNSAFE_componentWillMount(): void {
    console.log("SE va a montar");
  }
  render() {
    console.log(this.state.toggle);
    return (
      <div>
        <h1>ComponenteCicloVida</h1>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          togle
        </button>
      </div>
    );
  }
  componentDidMount(): void {
    console.log("Ha sido montado");
  }
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    return true;
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("actualizado");
  }

  componentWillUnmount(): void {
    console.log("Desmontado");
  }
}
