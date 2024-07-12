import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;
  return (
    <Heading as="h1" margin={5}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
