import React, { useState } from "react";
import Button from "./shared/Button";

const CheckButton = () => {
  const [sailing, setSailing] = useState<boolean>(false);

  return (
    <Button
      buttonText="CHECK IN"
      variant="outlined"
      onClick={() => setSailing(!sailing)}
      red={sailing}
    />
  );
};

export default CheckButton;
