import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../service/image-url";
import GameCardContainer from "./GameCardContainer";
export interface Props {
  game: Games;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <GameCardContainer>
        <Card>
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody>
            <Heading fontSize="2x1">{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
