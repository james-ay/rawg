import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../service/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";
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
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize="2x1">
              {game.name}
              <Emoji rating={game.rating_top} />
            </Heading>
          </CardBody>
        </Card>
      </GameCardContainer>
    </>
  );
};

export default GameCard;
