import { Box, HStack, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <HStack paddingY="5px">
      <SkeletonCircle size="8"></SkeletonCircle>
      <SkeletonText width="70%"></SkeletonText>
    </HStack>
  );
};

export default GenreSkeleton;
