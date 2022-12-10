// @ts-nocheck
/** */
export const load = async () => {
  const productRes = await fetch(
    "https://dummyjson.com/products/search?q=phone"
  );
  const productData = await productRes.json();
  console.log("+page.ts, products", productData);
  const products = productData.products;
  console.log("+page.ts, products", products);
  return { products };
};
