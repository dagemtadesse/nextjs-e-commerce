"use client";

import {
  Grid,
  Stack,
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ItemCard } from "./ItemCard";
import { Collection } from "../_types/collection";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const CollectionRow = ({ filtered }: { filtered: Collection }) => {
  const theme = useTheme();

  const phone = useMediaQuery(theme.breakpoints.down("md"));
  const tablet = useMediaQuery(theme.breakpoints.down("lg"));
  const desktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          <Stack justifyContent={"space-between"} height={"100%"}>
            <Box>
              <Typography variant="subtitle1">{filtered.title}</Typography>
              <Typography variant="body2">{filtered.subtitle}</Typography>
            </Box>

            <Stack direction="row" mt="auto">
              <IconButton disabled>
                <ArrowBackIosNewIcon />
              </IconButton>
              <IconButton>
                <ArrowForwardIosIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={8} lg={9}>
          <Grid container spacing={4}>
            {filtered.items.slice(0, phone ? 1 : tablet ? 3 : 4).map((item) => (
              <Grid item xs={12} md={4} lg={3} key={item.entityId}>
                <ItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
