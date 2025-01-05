import { Stack, Button, Image, Text, Show, chakra } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar/Sidebar";

const NavBarData = [
  {
    title: "Gallery",
    icon: "/home-icon.png",
    link: "/gallery/home",
  },
  {
    title: "MAXMORIES",
    icon: "/state-icon.png",
    link: "/maxmories",
  },
  {
    title: "Movies",
    icon: "/malpun-icon.png",
    link: "/movies",
  },
];

// in case chakranya error karena stack propsnya gaada
const MotionStack = motion(chakra(Stack));

const MainLayoutDesktop = () => {
  return (
    <>
      {/* <MotionStack> di ganti ini nanti Stacknya, sama motion.div diilangin aja */}
      <MotionStack
        // as={motion.div}
        direction={"row"}
        justifyContent={"center"}
        zIndex={30}
        position={"absolute"}
        pt={10}
        px={"10rem"}
        minW={"100vw"}
        // minH={"100vh"}
        flex={1}
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 1,
            },
          },
        }}
        initial="hidden"
        // whileInView={"visible"}
        animate={"visible"}
      >
        <Stack
          bgColor={"rgba(255, 255, 255, 0.85)"}
          // p={5}
          py={{ lg: 4, xl: 4 }}
          pl={{ lg: 5, xl: 4 }}
          pr={{ lg: 4, xl: 6 }}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          backdropFilter={"blur(10px)"}
          rounded={"full"}
          gap={{ lg: 3, xl: 12 }}
        >
          {/* Logo MAXIMA 2024 */}
          <Link to={"/"}>
            <Stack w={"7.5rem"} direction={"row"} alignItems={"center"}>
              <Image
                mx={{ lg: 0, xl: 5 }}
                ml={{ lg: 0, xl: 14 }}
                src="/logo.svg"
                w={"2.5rem"}
                transition={"all 0.2s ease-in-out"}
                // _hover={{ w: "3rem", transformOrigin: "center" }}
              />
            </Stack>
          </Link>
          {/* Navbar Items */}
          <Stack direction={"row"} alignItems={"center"} mx={{ lg: 0, xl: 5 }}>
            {NavBarData.map((item, index) => (
              <motion.div
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                  },
                  closed: {
                    y: -20,
                    opacity: 0,
                  },
                }}
                initial={"closed"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileInView={"open"}
                transition={{
                  delay: index * 0.2,
                  duration: 0.75,
                }}
              >
                <Link to={item.link}>
                  <Button
                    variant={"plain"}
                    gap={2}
                    w={"7.5rem"}
                    p={5}
                    transition={"all 0.2s ease-in-out"}
                    fontFamily={"Lexend"}
                    fontWeight={500}
                    color={"text.primary"}
                    _hover={{
                      transform: "scale(0.90)",
                      fontWeight: 600,
                      transformOrigin: "center",
                      bgColor: "#FFFFFF0",
                    }}
                    css={{
                      "&:hover > img": {
                        opacity: 1,
                        transition: "opacity 0.2s ease-in-out",
                      },
                    }}
                    _active={{
                      bgColor: "#FFFFFF0",
                    }}
                  >
                    <Image
                      src={item.icon}
                      w={"1rem"}
                      h={"1rem"}
                      transition={"all 0.2s ease-in-out"}
                      _hover={{ w: "1.1rem", h: "1.1rem" }}
                    ></Image>
                    <Text>{item.title}</Text>
                  </Button>
                </Link>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </MotionStack>
      <Stack>
        <Outlet />
      </Stack>
    </>
  );
};

const MainLayoutMobile = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [open, setOpen] = useState(false);

  return (
    <Stack gap={0}>
      <Sidebar />
      <Stack className="abc">
        <Outlet />
      </Stack>
    </Stack>
  );
};

const GlobalLayout = () => {
  const [realIsMobile, setRealIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
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
    <>
      <Stack
        gap={0}
        w={"100vw"}
        h={"100vh"}
        overflowX={"hidden"}
        overflowY={"hidden"}
      >
        <Show when={!realIsMobile}>
          <MainLayoutDesktop />
        </Show>
        <Show when={realIsMobile}>
          <MainLayoutMobile />
        </Show>
      </Stack>
    </>
  );
};

export default GlobalLayout;
