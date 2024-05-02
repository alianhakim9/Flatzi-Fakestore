import { TbHourglassEmpty } from "react-icons/tb";
import { getProducts } from "../../actions/data";
import EmptyState from "../../components/empty-state";
import ListProducts from "../product/list-products";

export default async function Products({ query, category, sort }) {
  const products = await getProducts(sort);
  let filteredProducts;

  if (query) {
    filteredProducts = products.filter((product) => {
      if (product.title.toLowerCase().includes(query)) {
        return product;
      }
    });
  } else if (category) {
    filteredProducts = products.filter((product) => {
      if (product.category.toLowerCase() === category) {
        return product;
      }
    });
  } else {
    filteredProducts = products;
  }

  return (
    <div>
      <ListProducts products={filteredProducts} />
      {filteredProducts.length === 0 && (
        <EmptyState
          icon={<TbHourglassEmpty size={100} />}
          title="Product Not Found"
          subTitle={`Product '${query}' not available on our database.`}
        />
      )}
    </div>
  );
}
