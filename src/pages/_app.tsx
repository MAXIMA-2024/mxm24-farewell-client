import { Stack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Stack w={"100vw"} minH={"100vh"}>
      <Outlet />
    </Stack>
  );
};

export default AppLayout;
