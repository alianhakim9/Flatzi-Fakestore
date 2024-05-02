import { getCategories } from "../../actions/data";
import CategorySwiper from "./category-swiper";

export default async function Categories() {
  const categories = await getCategories();

  return <CategorySwiper categories={categories} />;
}
