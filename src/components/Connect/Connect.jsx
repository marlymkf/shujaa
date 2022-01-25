import React from "react";
import Button from "../Button/Button";
import { H1, Texto, Input, Flex } from "./styles";
const Connect = () => {
  return (
    <Flex>
      <div>
        <H1>Connect with your loved ones in Real-time.</H1>
        <Texto>
          Shujaa is a mobile platform that enables you to connect with your
          family and friends anywhere at anytime.
        </Texto>
        <Input type="email" />

        <Button className="botao-1">Get early access</Button>
      </div>
      <img src="img/Vector.png" alt="" />
    </Flex>
  );
};

export default Connect;
