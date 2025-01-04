import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AppLayout = () => {
  const loc = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, [loc.pathname]);

  return (
    <Stack w={"100vw"} minH={"100vh"}>
      <AnimatePresence>
        {showSplash && (
          <motion.img
            key={"splash"}
            src={"/bg/splash.png"}
            alt={"splash"}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              zIndex: 100,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {!showSplash && <Outlet />}
      </AnimatePresence>
    </Stack>
  );
};

export default AppLayout;
