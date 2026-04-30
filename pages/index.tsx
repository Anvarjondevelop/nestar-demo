import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Stack sx={{ background: "#81c784" }}></Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Box>Popular properties </Box>
          <Box>Top Agents</Box>
          <Box> Top properties</Box>
          <Box> Top Events</Box>
        </Stack>
      </Container>
    </>
  );
};
export default Home;
