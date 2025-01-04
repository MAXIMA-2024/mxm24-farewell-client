import { Stack } from "@chakra-ui/react";

const StatePage = () => {
  return (
    <Stack
      bgColor={"red"}
      minW={"100vw"}
      minH={"100vh"}
      backgroundImage={[
        `url(/bg/galleryBG2_state_mobile.png)`,
        `url(/bg/galleryBG2_state_mobile.png)`,
        `url(/bg/galleryBG2_state.png)`,
        `url(/bg/galleryBG2_state.png)`,
        `url(/bg/galleryBG2_state.png)`,
      ]}
      backgroundSize={"cover"}
      backgroundPosition={"bottom"}
      backgroundRepeat={"no-repeat"}
    >
      <p>STATE Page</p>
    </Stack>
  );
};

export default StatePage;
