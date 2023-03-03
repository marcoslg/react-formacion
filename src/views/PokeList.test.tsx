import { fireEvent, render, screen } from "@testing-library/react";
import PokeList from "./PokeList";
import axios from "axios";

describe("test Pokelist", () => {
  xit("click the botton show 50 pokemons", async () => {
    render(<PokeList />);
    const btn = screen.getByText("Show pokemon");
    fireEvent.click(btn);

    // const pokemonList = await screen.findByLabelText("pokemonlist");
    // expect(pokemonList.childElementCount).toBe(50);
    const pokemons = await screen.findAllByLabelText("pokemon");
    expect(pokemons).toHaveLength(50);
  });
});

describe("mocking axios", () => {
  let myMock: jest.Mock<any, any>;

  let mockedAxios = axios as jest.MockedFunction<typeof axios>;
  beforeAll(() => {
    jest.mock("axios");
    mockedAxios = jest.mocked(axios, true);
//     mockedAxios.mockImplementation(() => 
//        {
//         data: {
//           results: [
//             {
//               name: "bulbasaur",
//               url: "https://pokeapi.co/api/v2/pokemon/1/",
//             },
//             {
//               name: "ivysaur",
//               url: "https://pokeapi.co/api/v2/pokemon/2/",
//             },
//           ],
//         },
//       };
//     );
//   });

  it("mock axios throwing controlled data", async () => {
    const res = await mockedAxios.get("hola");
    console.log(res);
  });
});
