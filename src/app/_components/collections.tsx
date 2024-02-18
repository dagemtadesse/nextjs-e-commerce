import { Stack } from "@mui/material";
import { Collection } from "../_types/collection";

import { CollectionRow } from "./CollectionRow";

export const Collections = async () => {
  const response = await fetch(
    "https://api.testvalley.kr/collections?prearrangedDiscount"
  );
  const cols = (await response.json()) as { items: Collection[] };
  const filteredCollection = cols.items.filter((col) => col.viewType == "TILE");

  return (
    <Stack gap={3} my={5}>
      {filteredCollection.map((filtered) => (
        <CollectionRow key={filtered.id} filtered={filtered} />
      ))}
    </Stack>
  );
};
