import { Image, Stack } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas-lite";
import EmblaCarousel from "@/components/embla/EmblaCarousel";

const HomePage = () => {
  const rive = useRive({
    src: "/rive/memories.riv",
    artboard: "HoMe",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

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
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      justify={"center"}
      align={"center"}
      pos={"relative"}
    >
      <Stack
        bgImg={"url(/kertas.png)"}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPos={"center"}
        boxSize={["22rem", "28rem", "38rem", "42rem", "48rem"]}
        justify={"center"}
        align={"center"}
        pt={["2.5rem", "4rem", "6rem", "8rem", "9rem"]}
        mb={["4rem", "4rem", 0, 0, 0]}
      >
        <EmblaCarousel
          slides={Array.from({ length: 9 }).map(
            (_, index) => `/assets/gallery/home/${index + 1}.jpg`
          )}
        />
      </Stack>

      <Stack
        w={["16rem", "18rem", "18rem", "24rem", "28rem"]}
        h={["14rem", "16rem", "16rem", "22rem", "26rem"]}
        pos={"absolute"}
        right={["0rem", "0rem", "-4rem", "-4rem", "-4rem"]}
        bottom={["1rem", "2rem", "8rem", "8rem", "8rem"]}
      >
        <rive.RiveComponent
          style={{
            flex: 1,
          }}
        />
      </Stack>

      <Image
        pos={"absolute"}
        bottom={0}
        w={["full", "full", "full", "full", "full"]}
        src={"/bottom_home.png"}
      />
    </Stack>
  );
};

export default HomePage;
