import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

interface Shortcut {
  mainShortcutId: number;
  title: string;
  sort: number;
  imageUrl: string;
  linkUrl: string;
  creator: string;
  updater: string;
  deleter: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
}

export const Categories = async () => {
  const response = await fetch("https://api.testvalley.kr/main-shortcut/all");
  const shortcuts = (await response.json()) as Shortcut[];

  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      alignItems={"center"}
      my={5}
    >
      {shortcuts?.map((data) => (
        <Card key={data.mainShortcutId} elevation={0}>
          <CardMedia
            component="img"
            height="62"
            sx={{ objectFit: "contain", aspectRatio: 1 }}
            image={data.imageUrl}
          />
          <CardContent>
            <Typography>{data.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};
