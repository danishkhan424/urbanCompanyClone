import React, { useEffect, useState } from "react";
import { Box, Input, InputGroup, InputLeftElement, useBreakpointValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Search = () => {
  const [placeholder, setPlaceholder] = useState("");
  const searchOptions = ["Kitchen cleaning", "AC service", "Facial"];
    const inputGroupSize = useBreakpointValue({ base: "sm", md: "lg" });

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setPlaceholder(searchOptions[index]);
      index = (index + 1) % searchOptions.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <InputGroup size={inputGroupSize}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.800" />}
        />
        <Input type="text" placeholder={`Search for '${placeholder}'`} />
      </InputGroup>
    </Box>
  );
};

export default Search;
