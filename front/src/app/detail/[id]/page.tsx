import AddToCart from "@/components/AddToCart"
import { fetchProductsById } from "@/lib/server/fetchProducts"
import Image from "next/image"

export default async function Detail({params}: {params: {id: string}}) {

    const productId = await fetchProductsById(params.id)

    return (
        <div className="mt-40 flex flex-col items-center p-10">
  <div className="mx-auto mt-6 flex max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    <div className="rounded-lg lg:col-span-1">
      <Image src={productId.image} alt={productId.name} width={600} height={600} />
    </div>
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:pb-6 lg:col-span-2 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:border-r lg:border-blue-600 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl mb-5">{productId.name}</h1>
        <p>{productId.description}</p>
      </div>
      <div className="mt-4">
        <h2 className="sr-only">Product Information</h2>
        <p className="text-3xl tracking-tight text-blue-600">${productId.price}</p>
        <form>
          <AddToCart id={productId.id} />
        </form>
      </div>
    </div>
  </div>
</div>

    )
}