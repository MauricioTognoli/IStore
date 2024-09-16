import { IProduct } from "@/interfaces/interfaces";

export async function fetchProducts(): Promise<IProduct[]> {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    return data;
  }


export async function fetchProductsById(id: string): Promise<IProduct> {
    const response= await fetch(`http://localhost:3001/products/${id}`)
    const product= await response.json()
    return product
}
