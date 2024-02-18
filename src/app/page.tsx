import { Container } from "@mui/material";

import { Categories } from "./_components/categories";
import { Collections } from "./_components/collections";
import { Footer } from "./_components/Footer";
import { Carousel } from "./_components/Carousel";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        {/* @ts-expect-error Async */}
        <Carousel />
      </Suspense>
      <Container>
        {/* @ts-expect-error Async */}
        <Categories />
        {/* @ts-expect-error Async */}
        <Collections />
      </Container>
      <Footer />
    </>
  );
}
