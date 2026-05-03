import withLayoutMain from "@/libs/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { ST } from "next/dist/shared/lib/utils";

const Home: NextPage = () => {
  return (
    <>
      <Stack>
        <Stack flexDirection={"column"}>
          <Stack>
            <Stack className="container">Popular properties </Stack>
          </Stack>
          <Stack>
            <Stack className="container">Top Agents </Stack>
          </Stack>
          <Stack>
            <Stack className="container">Top properties </Stack>
          </Stack>
          <Stack>
            <Stack className="container">Top Events </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default withLayoutMain(Home);
