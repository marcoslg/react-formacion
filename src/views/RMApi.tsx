import axios from "axios";
import { RMCharacter } from "models";
import React, { useState } from "react";
import { rmService } from "services/http";

const RMApi = () => {
  const apiURL = "https://rickandmortyapi.com/api/character";

  const [charNumber, setCharNumber] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const fetchCharacter = () => {
    console.log(`fetchCharacter ${charNumber}`);
    const url = `${apiURL}/${charNumber}`;
    console.log(url);
    fetch(url)
      .then((rawData) => rawData.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  const axiosCharacter = async () => {
    console.log(`fetchCharacter ${charNumber}`);
    const url = `${apiURL}/${charNumber}`;
    console.log(url);
    // axios
    //   .get(url)
    //   .then((r) => console.log(r))
    //   .catch((err) => console.log(err));
    setLoading(true);

    // rmService
    //   .get(charNumber.toString())
    //   .then(console.log)
    //   .catch(console.log)
    //   .finally(() => setLoading(false));
    // try {
    //   const res = await rmService.get(charNumber.toString());
    //   console.log(res);
    // } catch {
    //   console.log("error");
    // }

    // const res = await rmService
    //   .get(charNumber.toString() + "asd")
    //   .catch(console.error);
    // setLoading(false);
    // console.log(res);

    const res = await rmService
      .get<RMCharacter>(charNumber.toString())
      .catch(console.error);
    setLoading(false);
    if (!res) return;
    console.log(res.data);
  };

  return (
    <div>
      <h2>Choose your character</h2>
      <input
        type="number"
        value={charNumber}
        onChange={(e) => setCharNumber(Number(e.target.value))}
      />
      <button onClick={fetchCharacter} disabled={loading}>
        Fetch
      </button>
      <button onClick={axiosCharacter} disabled={loading}>
        axios fetch
      </button>
      <div className="card">titulo</div>
    </div>
  );
};

export default RMApi;
