import Modal from "components/Modal";
import React from "react";
import { Button } from "reactstrap";

const Bootstrap = () => {
  return (
    <div>
      <div>
        <Button color="primary">primary</Button> <Button>secondary</Button>{" "}
        <Modal
          btnText="Haz clic"
          ctaNegative={<Button color="danger">CAncel</Button>}
          ctaPositive={<Button color="primary">Hola</Button>}
          title="Titulo modal"
          children={<p>hola</p>}
        />
      </div>
    </div>
  );
};

export default Bootstrap;
