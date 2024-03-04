import { useEffect, useState } from "react";

import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import { Loader } from "./Components/Loader";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Login from "./Components/Navbar/Login";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Box className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          <Navbar />
          <Header />
          <Footer />
        </Box>
      )}
    </Box>
  );
}

export default App;
