import React from "react";
import { Box } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minH="100vh" p={4} bg="gray.50">
      {children}
    </Box>
  );
};

export default Layout;
