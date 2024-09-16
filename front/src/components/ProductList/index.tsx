import { IProduct, IProductListProps } from "@/interfaces/interfaces";
import Card from "../ProductCards";

export default function ProductList({ products }: IProductListProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((products: IProduct) => (
           <Card key={products.id} product={products}/>
       ))}
    </div>
  );
}
