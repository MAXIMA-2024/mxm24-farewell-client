import { Stack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const items = [
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

const Links = ({ closeSidebar }: { closeSidebar: () => void }) => {
  return (
    <Stack as={"div"}>
      <motion.div
        initial="closed"
        animate="open"
        exit="closed"
        className="links"
      >
        {/* Links */}

        <Stack gap={6}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                open: {
                  x: 0,
                  opacity: 1,
                },
                closed: {
                  x: -50,
                  opacity: 0,
                },
              }}
              initial={"closed"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileInView={"open"}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
              }}
            >
              <Link to={item.link} onClick={closeSidebar}>
                <Stack direction="row" alignItems="center" gap={6}>
                  <Image
                    src={item.icon}
                    w={
                      item.title !== "State" && item.title !== "FAQ"
                        ? "1rem"
                        : "1.25rem"
                    }
                    h={"1rem"}
                  />
                  <Text fontFamily={"Lexend"} color={"text.primary"}>
                    {item.title}
                  </Text>
                </Stack>
              </Link>
            </motion.div>
          ))}
        </Stack>
      </motion.div>
    </Stack>
  );
};

export default Links;
