import { Card, Box, CardMedia, Typography, CardContent, Stack } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import UndoIcon from "@mui/icons-material/Undo";
import { Item } from "../_types/item";


export const ItemCard = ({item}: {item: Item}) => {
  return <Card elevation={0}>
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        sx={{ objectFit: "contain", aspectRatio: 1 }}
        image={item.publication.media[0].uri}
      />
      {item.publication.tagsOnImage &&
        item.publication.tagsOnImage.length > 0 && (
          <Box
            sx={{
              bgcolor: "secondary.main",
              px: 0.75,
              py: 0.25,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              bottom: 0,
              left: 0,
            }}
          >
            <UndoIcon
              sx={{
                transform: "rotateX(180deg)",
                fontSize: "0.825em",
                color: "white",
              }}
            />
            <Typography variant="caption" color="secondary.contrastText">
              {item.publication.tagsOnImage.join(" ")}
            </Typography>
          </Box>
        )}
    </Box>
    <CardContent sx={{ px: 0 }}>
      <Typography variant="subtitle2">
        {item.publication.productName}
      </Typography>
      <Typography variant={"h6"}>
        <Typography component="span" sx={{ color: "error.main" }} variant="h6">
          {item.publication.priceInfo.discountRate}%
        </Typography>
        {item.publication.priceInfo.price}
      </Typography>
      <Stack direction="row" alignItems={"center"} gap={1}>
        <StarRateIcon sx={{ fontSize: "0.8em" }} />
        <Typography variant="body2">{item.publication.rating}</Typography>
      </Stack>
      <Stack direction="row" flexWrap={"wrap"} mt={2}>
        {item.publication.tagsOnDesc.map((tag) => (
          <Typography
            component="span"
            sx={{
              bgcolor: "grey.200",
              px: 0.5,
              py: 0.25,
              borderRadius: 1,
            }}
            variant="caption"
            key={`${item.entityId}-${tag}`}
          >
            {tag}
          </Typography>
        ))}
      </Stack>
    </CardContent>
  </Card>;
};
