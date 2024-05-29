import { ProductModel } from "@/interfaces/product.interface";

export async function fetchProductsByAlias(alias: string, limit: number = 10): Promise<ProductModel[] | null> {

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: alias,
      limit
    }),
    cache: "force-cache"
  });

  if (res.ok) {
    const products: ProductModel[] = await res.json();

    return products;
  }

  else return null;
};