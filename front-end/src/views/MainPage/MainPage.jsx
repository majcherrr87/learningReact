import { Hero } from "../../components/Hero/Hero";
import { Layout } from "../../components/Layout/Layout";
import COVER_IMAGE from "../../assets/cover.jpeg";

export function MainPage() {
  return (
    <Layout>
      <Hero heroImage={COVER_IMAGE} />
    </Layout>
  );
}
//TODO: https://kurs.zrozumiecreact.pl/products/zrozumiec-react/categories/2154031172/posts/2172258699 17:22
