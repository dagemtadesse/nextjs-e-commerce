import { Box } from "@mui/material";
import { Banner } from "../_types/banner";
import { CustomSlider } from "./Slider";

export const Carousel = async () => {
  const response = await fetch("https://api.testvalley.kr/main-banner/all");
  const data = (await response.json()) as Banner[];

  return (
    <Box sx={{}}>
      <CustomSlider data={data} />
    </Box>
  );
};
