import Advertisement from "@/libs/homepage/Advertisement";
import PopularProperties from "@/libs/homepage/PopularProperties";
import TopAgents from "@/libs/homepage/TopAgents";
import TopProperties from "@/libs/homepage/TopProperties";
import TrendProperties from "@/libs/homepage/TrendProperties";
import withLayoutMain from "@/libs/layout/LayoutHome";
import { Stack } from "@mui/material";
import { NextPage } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <Stack className={"home-page"}>
      <TrendProperties />
      <PopularProperties />
      <Advertisement />
      <TopProperties />
      <TopAgents />
    </Stack>
  );
};

export default withLayoutMain(Home);
