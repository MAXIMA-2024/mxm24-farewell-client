import EmblaCarousel from "@/components/embla/EmblaCarousel";
import { Stack, Image } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas-lite";

const MalpunPage = () => {
  const rive = useRive({
    src: "/rive/memories.riv",
    artboard: "Malpun",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  return (
    <Stack
      minW={"100vw"}
      minH={"100vh"}
      backgroundImage={[
        `url(/bg/galleryBG3_malpun_mobile.png)`,
        `url(/bg/galleryBG3_malpun_mobile.png)`,
        `url(/bg/galleryBG3_malpun.png)`,
        `url(/bg/galleryBG3_malpun.png)`,
        `url(/bg/galleryBG3_malpun.png)`,
      ]}
      backgroundSize={"cover"}
      backgroundPosition={"bottom"}
      backgroundRepeat={"no-repeat"}
      justify={"center"}
      align={"center"}
      pos={"relative"}
    >
      <Stack
        bgImg={"url(/papan.png)"}
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
            (_, index) => `/assets/gallery/malpun/${index + 1}.jpg`
          )}
        />
      </Stack>

      <Stack
        w={["22rem", "24rem", "28rem", "30rem", "34rem"]}
        h={["24rem", "26rem", "30rem", "32rem", "36rem"]}
        pos={"absolute"}
        right={["-3rem", "-3rem", "-3rem", "-3rem", "-3rem"]}
        bottom={["-4rem", "-4rem", "-4rem", "-2rem", "-4rem"]}
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
        src={"/bottom_malpun.png"}
      />
    </Stack>
  );
};

export default MalpunPage;
