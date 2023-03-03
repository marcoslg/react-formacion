/* eslint-disable */
import Contador from "./Contador";

const suma = (a: number, b: number) => a + b;

function ejeutaCallback(callbak: any) {}

// test("primer test", () => {
//   const valor = suma(2, 3);
//   console.log(valor);
//   expect(valor).toBe(5);
// });

// describe("Testeando sumas", () => {
//   test("suma + 0 + 0", () => {
//     const valor = suma(0, 0);
//     expect(valor).toBe(0);
//   });

//   xit("suma num negativos", () => {
//     const valor = suma(0, 0);
//     expect(suma(-10, -50)).toBe(-60);
//   });
// });

// describe("Testeando objetos", () => {
//   xit("Un objeto es otro objeto", () => {
//     const mi = { coche: "FErrari" };
//     const mi2 = mi;
//     expect(mi).toBe(mi2);
//     expect(mi).toEqual(mi2);
//   });

//   xit("Un objeto es otro no objeto", () => {
//     const mi = { coche: "FErrari" };
//     const mi2 = { ...mi };
//     expect(mi).toBe(mi2);
//     expect(mi).toEqual(mi2);
//   });
// });

// describe("Test mocks", () => {
//   it("primer mock", () => {
//     const mimock = jest.fn();
//     ejeutaCallback(mimock);
//     console.log(mimock);
//     expect(mimock).toBeCalledTimes(1);
//   });
// });

class MiClaseEspia {
  functionPrimaria() {
    console.log("llamando a secundarioa");
    this.functionSecundario("hola mundo");
  }
  functionSecundario(texto: string) {
    console.log(texto);
  }
}

describe("test spies", () => {
  it("primer spie", () => {
    //verificar la llamada con parametros especificos
    const myobj = new MiClaseEspia();
    const funcEspia = jest.spyOn(myobj, "functionSecundario");
    myobj.functionPrimaria();

    expect(funcEspia).toBeCalled();
    expect(funcEspia).toBeCalledWith("hola mundo");
  });
});
