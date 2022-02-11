import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navs/Nav";
import SidebarContent from "./components/SidebarContent";
import Home from "./pages/Home";
import User from "././pages/User";
import ScrollToTop from "./ScrollToTop";
import EditUser from "./pages/EditUser";
import Create from "./components/shared/Create";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      transition="all .5s ease"
      overflow="hidden"
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <SidebarContent
        display={{ base: "none", md: "block" }}
        onClose={() => onClose()}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* nav */}
      <Nav onOpen={onOpen} />

      {/* pages */}
      <Box overflowY="auto" ml={{ base: 0, md: 60 }} p={2}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/create-user" element={<Create />} />
          <Route path="/user/:id" element={<EditUser />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
