import { Stack, useBreakpoint } from "@chakra-ui/react";

const MoviesPage = () => {
  const vp = useBreakpoint({
    ssr: false,
    breakpoints: ["base", "sm", "md", "lg", "xl"],
  });

  const isMobile = vp === "base" || vp === "sm";

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
      align={"center"}
      justify={"center"}
    >
      <Stack
        pb={["19rem", "12rem", "5rem", "5rem", "5rem"]}
        w={"full"}
        h={"full"}
        justify={"center"}
        align={"center"}
      >
        <iframe
          width={isMobile ? "76%" : "65%"}
          height={isMobile ? "175px" : "65%"}
          src="https://www.youtube.com/embed/iscrtXGhVII?si=6jU6ZG2f8GcsktN-"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Stack>
    </Stack>
  );
};

export default MoviesPage;
