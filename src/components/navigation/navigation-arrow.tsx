import { Link, Flex, Box, Image, Text } from "@chakra-ui/react";

type NavigationArrowProps = {
  logoActive: string;
  logoUnactive: string;
  text: string;
  href: string;
  navActive: string;
  activeButton: (text: string) => void;
};

const NavigationArrow: React.FC<NavigationArrowProps> = ({
  logoActive,
  logoUnactive,
  text,
  href,
  navActive,
  activeButton,
}) => {
  return (
    <Link
      href={href}
      target="_self"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        bgImage="url(/navigation/nav-unactive.png)"
        bgRepeat="no-repeat"
        // alignItems="center"
        bgSize="contain"
        justifyContent="center"
        display="flex"
        flexDirection="column"
        transition="opacity 0.2s ease"
        _hover={{ opacity: 0.8, cursor: "pointer" }}
        onClick={() => activeButton(text)}
        // border="3px solid white"
        pl={4}
        width={170}
        height={79}
      >
        <Flex align="center">
          <Image
            src={`${navActive === text ? logoActive : logoUnactive}`}
            alt="Logo"
            boxSize="30px"
            mr={4}
          />
          <Text fontSize="lg" fontWeight="bold" color="white">
            {text}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
};

export default NavigationArrow;
