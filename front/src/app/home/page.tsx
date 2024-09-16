import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/lib/server/fetchProducts";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="mt-24">
      <ProductList products={products} />
    </div>
  );
}
