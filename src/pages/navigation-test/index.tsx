// pages/navigation-page.js
import NavigationArrow from "@/components/navigation/navigation-arrow";
import { useState } from "react";

import { Flex, Image } from "@chakra-ui/react";

const NavigationPage = () => {
  const [navActive, setNavActive] = useState<string>("");

  const activeButton = (text: string) => {
    setNavActive(text);
  };

  return (
    <Flex>
      <Image
        src="/navigation/pipe.png"
        width={30}
        display={{ base: "none", md: "block" }}
      />
      <Flex direction="column" gap={8} mt={10}>
        <NavigationArrow
          text="Home"
          logoActive="/navigation/home-active.png"
          logoUnactive="/navigation/home-unactive.png"
          href="gallery/home"
          navActive={navActive}
          activeButton={activeButton}
        />
        <NavigationArrow
          text="State"
          logoActive="/navigation/state-active.png"
          logoUnactive="/navigation/state-unactive.png"
          href="gallery/state"
          navActive={navActive}
          activeButton={activeButton}
        />
        <NavigationArrow
          text="Malpun"
          logoActive="/navigation/malpun-active.png"
          logoUnactive="/navigation/malpun-unactive.png"
          href="gallery/malpun"
          navActive={navActive}
          activeButton={activeButton}
        />
      </Flex>
    </Flex>
  );
};

export default NavigationPage;
