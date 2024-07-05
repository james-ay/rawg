import { Card, Skeleton, CardBody, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

const GameCardSkeleton = () => {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCardSkeleton;
