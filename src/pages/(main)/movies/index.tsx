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
      <Stack pb={["23.5rem", "23.5rem", "5rem", "5rem", "5rem"]}>
        <iframe
          width={isMobile ? "325" : "800"}
          height={isMobile ? "185" : "500"}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=6jU6ZG2f8GcsktN-"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Stack>
    </Stack>
  );
};

export default MoviesPage;
