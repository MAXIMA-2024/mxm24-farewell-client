import {
  Stack,
  Image,
  Text,
  Box,
  Heading,
  Button,
  Show,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MaxMoriesPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  // detect if user is using mobile by grabbing current window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1080) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [realIsMobile, setRealIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRealIsMobile(true);
      } else {
        setRealIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Stack
      transform={realIsMobile ? "rotate(90deg)" : "rotate(0deg)"}
      transformOrigin="center"
      minWidth={realIsMobile ? "100vh" : "100%"}
      minHeight={realIsMobile ? "100vw" : "100vh"}
      position="absolute"
      top="0"
      left="0"
    >
      <Stack
        bgImage={"url('/bg/maxmories-bg.png')"}
        minW={"100%"}
        minH={"100vh"}
        bgSize={"cover"}
        bgPos={"center"}
        bgRepeat={"no-repeat"}
        justify={"center"}
        align={"center"}
        pt={{ base: "22.5%", md: 5 }}
      >
        <Stack
          bgImage={"url('maxmories-book.png')"}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          w={{ base: "100%", md: "90%", lg: "75%", xl: "65%" }}
          h={"100%"}
          position={"absolute"}
          justify={"space-evenly"}
          bgPos={"center"}
          align={"center"}
          direction={"row"}
          p={{ base: 0, md: 5 }}
          pt={{ base: 5, md: 0 }}
        >
          {/* Kiri */}
          <Stack
            pl={{ md: 0, xl: 10 }}
            align={"center"}
            fontFamily={"Luthier"}
            pb={5}
          >
            <Heading
              mt={{ base: "1rem", md: "1rem", lg: "1.5rem", xl: "2rem" }}
              mb={{ base: "1rem", md: "1rem", lg: "1.25rem", xl: "1.75rem" }}
              size={["xl", "xl", "xl", "2xl", "3xl"]}
              color={"#661226"}
            >
              MAXMORIES
            </Heading>
            <Box
              // w={{ md: "100%", lg: "75%", xl: "75%" }}
              //  w={["10rem", "10rem", "10rem", "10rem"]}
              // h={["10rem", "10rem", "10rem", "10rem", "17.5rem"]}
              w={{ base: "10rem", md: "10rem", xl: "20rem" }}
              h={{ base: "5rem", md: "10rem", xl: "15rem" }}
              bg={"white"}
              p={{ base: 1, md: 2.5, xl: 5 }}
              pos={"relative"}
            >
              <Show when={!isMobile}>
                <Image
                  src={"/bg/solasikertas.png"}
                  alt={"Solasi Kertas"}
                  w={{ base: "15%", md: "17.5%", lg: "20%" }}
                  h={{ base: "25%", md: "25%", lg: "30%" }}
                  pos={"absolute"}
                  left={{ md: -2, lg: -5 }}
                  top={{ md: -2, lg: -5 }}
                />
                <Image
                  src={"/bg/solasikertas.png"}
                  alt={"Solasi Kertas"}
                  w={{ base: "15%", md: "17.5%", lg: "20%" }}
                  h={{ base: "25%", md: "25%", lg: "30%" }}
                  pos={"absolute"}
                  bottom={{ md: -2, lg: -5 }}
                  right={{ md: -2, lg: -5 }}
                />
              </Show>
              <Image src={"/assets/maxmories/1.jpg"} w={"100%"} h={"100%"} />
              {/* Nanti Tambah Image di Sini */}
            </Box>
            {/* <Show when={isMobile}> */}
            <Stack
              mt={{ base: "1rem", md: "1.25rem", lg: "1.5rem", xl: "2rem" }}
              w={["10rem", "10rem", "10rem", "13rem", "25rem"]}
              // w={"25rem"}
              // h={"7.5rem"}
              bg={"#F4D6B0"}
              p={{ base: 2, md: 2.5, xl: 5 }}
              fontFamily={"Lexend"}
              borderRadius={"lg"}
            >
              <Text color={"black"} fontSize={[10, 10, 12, 14, 16]}>
                <b>✨ MAXMORIES ✨</b> <br />
                Temukan momen terbaikmu di MAXIMA 2024!
                <Show when={!isMobile}>
                  MAXMORIES hadir untuk mengabadikan setiap tawa, sorak, dan
                  cerita luar biasa yang tercipta selama perjalanan MAXIMA 2024.
                </Show>
              </Text>
            </Stack>
            {/* </Show> */}
          </Stack>
          {/* Kanan */}
          <Stack pl={{ md: 5, xl: 10 }} align={"center"} fontFamily={"Luthier"}>
            <Stack direction={"row"} justify={"center"} gap={5}>
              <Stack gap={5} w={"100%"}>
                <Box
                  w={{ base: "100%", md: "7.5rem", lg: "8rem", xl: "11rem" }}
                  h={{ base: "5rem", md: "7.5rem", lg: "8rem", xl: "11rem" }}
                  bg={"white"}
                  p={{ base: 1, md: 2.5, xl: 3 }}
                  pos={"relative"}
                >
                  <Image
                    src={"/bg/solasikertas-kecil.png"}
                    alt={"Solasi Kertas"}
                    w={"27.5%"}
                    h={"30%"}
                    pos={"absolute"}
                    left={-2.5}
                    top={-2.5}
                  />
                  {/* Nanti Tambah Image di Sini */}
                  <Image
                    src={"/assets/maxmories/10.jpg"}
                    w={"100%"}
                    h={"100%"}
                  />
                </Box>
                <Box
                  w={{ base: "100%", md: "7.5rem", lg: "8rem", xl: "11rem" }}
                  h={{ base: "5rem", md: "7.5rem", lg: "8rem", xl: "11rem" }}
                  bg={"white"}
                  p={{ base: 1, md: 2.5, xl: 3 }}
                  pos={"relative"}
                >
                  <Image
                    src={"/bg/solasikertas-kecil.png"}
                    alt={"Solasi Kertas"}
                    w={"27.5%"}
                    h={"30%"}
                    pos={"absolute"}
                    left={-2.5}
                    top={-2.5}
                  />
                  {/* Nanti Tambah Image di Sini */}
                  <Image
                    src={"/assets/maxmories/9.jpg"}
                    w={"100%"}
                    h={"100%"}
                  />
                </Box>
              </Stack>
              <Show when={!isMobile}>
                <Stack gap={5} align={"center"} justify={"center"}>
                  <Box
                    w={{ base: "7.5rem", md: "10rem", xl: "10rem" }}
                    h={{ base: "7.5rem", md: "5rem", xl: "15rem" }}
                    bg={"white"}
                    p={{ base: 1, md: 2.5, xl: 3 }}
                    pos={"relative"}
                  >
                    <Image
                      src={"/bg/solasikertas-kecil.png"}
                      alt={"Solasi Kertas"}
                      w={"27.5%"}
                      h={"20%"}
                      pos={"absolute"}
                      left={-2.5}
                      top={-2.5}
                    />
                    {/* Nanti Tambah Image di Sini */}
                    <Image
                      src={"/assets/maxmories/7.jpg"}
                      w={"100%"}
                      h={"100%"}
                    />
                  </Box>
                </Stack>
              </Show>
            </Stack>
            <Show when={!isMobile}>
              <Stack
                mt={"1rem"}
                w={"25rem"}
                // h={"7.5rem"}
                // bg={"#F4D6B0"}
                // p={0}
                fontFamily={"Luthier"}
              >
                <Heading color={"#975934"}>
                  "Hari ini jadi kenangan, esok jadi cerita,
                  <Heading size={"3xl"}>MAXMORIES</Heading> menyimpannya
                  untukmu"
                </Heading>
              </Stack>
            </Show>
            <Stack
              justify={"end"}
              align={{ md: "center", xl: "end" }}
              w={"100%"}
              pt={{ base: 3, md: 3, xl: 3 }}
            >
              <Button
                bgColor={"#47002D"}
                variant={"ghost"}
                fontFamily={"Lexend"}
                justifyContent={"center"}
                alignContent={"center"}
                borderRadius={"lg"}
                color={"white"}
                _hover={{ bgColor: "#661226" }}
                // _active={{ bgColor: "#661226" }}
                // _focus={{ bgColor: "#661226" }}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/drive/folders/1KqpZvWT29TTaaksMvCgNsZnKNbJgflPq?usp=sharing"
                  );
                }}
              >
                <Image src="/DiGoogleDrive.png" w={{ base: 4, md: 7, xl: 8 }} />
                <Text
                  fontSize={{ md: "md", xl: "xl" }}
                  fontWeight={"bold"}
                  color={"white"}
                >
                  Drive
                </Text>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MaxMoriesPage;
