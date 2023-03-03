import Contador from "./Contador";
import { fireEvent, render, screen } from "@testing-library/react";

it("Renders correctly", () => {
  const view = render(<Contador />);
  expect(view).toBeDefined();
});

describe("Testeando UI", () => {
  it("existe un elemento con el texto 'valor: 0'", () => {
    const view = render(<Contador />);
    const titulo = view.getByText("valor: 0");
    //console.log(titulo);
  });
});

describe("Testeando UI2", () => {
  beforeAll(() => {
    console.log("antes de los test");
  });
  const view = render(<Contador />);

  it("existe un elemento con el texto 'valor: 0'", () => {
    render(<Contador />);
    // const titulo = screen.getByText("valor: 0");
    const titulo = view.getByText("valor: 0");
    //expect(titulo).toBeDefined();
    //expect(titulo).toHaveStyle("color: red");
    //console.log(titulo);
  });

  it("Testeando title element", () => {
    render(<Contador />);
    const titulo = screen.getByLabelText("title"); //aria-label en el html
    expect(titulo).toBeDefined();
    //expect(titulo).toHaveStyle("font-weight: regular");
    //expect(titulo).toHaveStyle("color: red");
    //console.log(titulo);
  });
});

describe("testing contador features", () => {
  it("increments value", () => {
    render(<Contador />);
    const boton = screen.getByText("+ valor");
    const titulo = screen.getByLabelText("title");

    expect(titulo).toHaveTextContent("valor: 0");
    fireEvent.click(boton);
    expect(titulo).toHaveTextContent("valor: 1");
  });
});
