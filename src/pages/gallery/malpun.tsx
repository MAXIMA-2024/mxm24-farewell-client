import { Stack } from "@chakra-ui/react";

const MalpunPage = () => {
  return (
    <Stack
      bgColor={"red"}
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
    >
      <p>Malpun Page</p>
    </Stack>
  );
};

export default MalpunPage;
