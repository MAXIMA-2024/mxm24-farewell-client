import { Stack } from "@chakra-ui/react";

const MoviesPage = () => {
  return (
    <Stack
      bgColor={"red"}
      minW={"100vw"}
      minH={"100vh"}
      backgroundImage={[
        `url(/bg/galleryBG4_teater_mobile.png)`,
        `url(/bg/galleryBG4_teater_mobile.png)`,
        `url(/bg/galleryBG4_teater.png)`,
        `url(/bg/galleryBG4_teater.png)`,
        `url(/bg/galleryBG4_teater.png)`,
      ]}
      backgroundSize={"cover"}
      backgroundPosition={"top"}
      backgroundRepeat={"no-repeat"}
    >
      <p>Movie Page</p>
    </Stack>
  );
};

export default MoviesPage;
