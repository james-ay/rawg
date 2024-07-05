import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
export interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="2x1">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
