import { Stack, useBreakpoint } from "@chakra-ui/react";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas-lite";

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
    </Stack>
  );
};

export default LandingPage;
