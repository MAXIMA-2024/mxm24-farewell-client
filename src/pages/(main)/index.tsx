import { Stack, useBreakpoint, Heading, Button } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas-lite";
import { Link as RouterLink } from "react-router-dom";

const LandingPage = () => {
  const vp = useBreakpoint({
    ssr: false,
    breakpoints: ["base", "sm", "md", "lg", "xl"],
  });

  const isMobile = vp === "base" || vp === "sm";

  const rive = useRive({
    src: "/rive/memories.riv",
    artboard: isMobile ? "MobileLandingPage" : "DesktopLandingPage",
    stateMachines: "Main",
    autoplay: true,
    layout: new Layout({ fit: Fit.Cover, alignment: Alignment.Center }),
  });

  return (
    <Stack
      minW={"100vw"}
      minH={"100vh"}
      flex={1}
      pos={"relative"}
      bgImage={{
        base: "/bg/landing-static-mobile.png",
        lg: "/bg/landing-static.png",
      }}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
    >
      <rive.RiveComponent
        style={{
          flex: 1,
        }}
      />

      <Stack
        minW={"100vw"}
        minH={"100vh"}
        flex={1}
        pos={"absolute"}
        overflow={"hidden"}
        justify={"center"}
        align={["center", "center", "end", "end", "end"]}
      >
        <Stack
          mx={["0rem", "0rem", "4rem", "4rem", "4rem"]}
          mb={"4rem"}
          textAlign={"center"}
          gap={"3rem"}
        >
          <Stack>
            <Heading
              fontFamily={"Luthier"}
              fontWeight={"bold"}
              fontSize={"4xl"}
              color={"#44002B"}
            >
              Halo! Selamat Datang
            </Heading>
            <Heading
              fontFamily={"Luthier"}
              fontWeight={"bold"}
              fontSize={"6xl"}
              color={"#44002B"}
            >
              MAXIMERS
            </Heading>
          </Stack>

          <Button
            as={RouterLink}
            // @ts-expect-error bodoamat
            to={"/gallery/home"}
            bgColor={"#47002D"}
            fontFamily={"Lexend"}
            fontSize={"1rem"}
            size={"lg"}
            color={"white"}
            rounded={"0.5rem"}
            py={"1rem"}
          >
            View our Memories
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LandingPage;
