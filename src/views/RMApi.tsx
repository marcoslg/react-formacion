import axios from "axios";
import AstronautaLoader from "components/loaders/AstronautaLoader";
import { RMCharacter } from "models";
import React, { useState } from "react";
import { rmService } from "services/http";

const RMApi = () => {
  const apiURL = "https://rickandmortyapi.com/api/character";

  const [charNumber, setCharNumber] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [char, setChar] = useState<RMCharacter>();
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
    setLoading(true);

    const res = await rmService
      .get<RMCharacter>(charNumber.toString())
      .catch(console.error);
    setLoading(false);
    if (!res) return;
    console.log(res.data);
    setChar(res.data);
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
      {loading && <AstronautaLoader />}
      {char && !loading && (
        <div className="card">
          <div className="img">
            <img src={char.image} alt={char.name} />
          </div>
          <div className="details">
            <ul>
              <li>Name: {char.name}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RMApi;
