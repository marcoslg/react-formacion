/* eslint-disable */
import Contador from "./Contador";

const suma = (a: number, b: number) => a + b;

function ejeutaCallback(callbak: any) {}

test("primer test", () => {
  const valor = suma(2, 3);
  console.log(valor);
  expect(valor).toBe(5);
});

describe("Testeando sumas", () => {
  test("suma + 0 + 0", () => {
    const valor = suma(0, 0);
    expect(valor).toBe(0);
  });

  xit("suma num negativos", () => {
    const valor = suma(0, 0);
    expect(suma(-10, -50)).toBe(-60);
  });
});

describe("Testeando objetos", () => {
  it("Un objeto es otro objeto", () => {
    const mi = { coche: "FErrari" };
    const mi2 = mi;
    expect(mi).toBe(mi2);
    expect(mi).toEqual(mi2);
  });

  it("Un objeto es otro no objeto", () => {
    const mi = { coche: "FErrari" };
    const mi2 = { ...mi };
    expect(mi).toBe(mi2);
    expect(mi).toEqual(mi2);
  });
});

describe("Test mocks", () => {
  it("primer mock", () => {
    const mimock = jest.fn();
    ejeutaCallback(mimock);
    console.log(mimock);
    expect(mimock).toBeCalledTimes(1);
  });
});
