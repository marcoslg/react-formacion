import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
const Materal = () => {
  const [texto, setTexto] = useState("");
  return (
    <div>
      {/* There is already an h1 in the page, let's not duplicate it. */}
      <Typography variant="h1" component="h2" mb={4}>
        h1. Heading
      </Typography>
      <TextField
        sx={{ color: "red" }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <h1>hola</h1>
    </div>
  );
};

export default Materal;
