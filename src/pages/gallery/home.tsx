import { Stack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Stack
      bgColor={"red"}
      minW={"100vw"}
      minH={"100vh"}
      backgroundImage={[
        `url(/bg/galleryBG_home_mobile.png)`,
        `url(/bg/galleryBG_home_mobile.png)`,
        `url(/bg/galleryBG_home.png)`,
        `url(/bg/galleryBG_home.png)`,
        `url(/bg/galleryBG_home.png)`,
      ]}
      backgroundSize={"cover"}
      backgroundPosition={"bottom"}
      backgroundRepeat={"no-repeat"}
    >
      <p>Landing Page</p>
    </Stack>
  );
};

export default HomePage;
