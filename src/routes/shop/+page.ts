export const load = async () => {
  const fetchProducts = async () => {
    const productRes = await fetch(
      "https://dummyjson.com/products/search?q=phone&limit=10"
    );
    const productData = await productRes.json();
    return productData.products;
  };
  
  const fetchUsers = async () => {
    const userRes = await fetch("https://dummyjson.com/users?limit=10");
    const userData = await userRes.json();
    userData.users;
  };

  console.log("+page.ts, fetch data from api");

  // pass data with contents of Promise
  return {
    products: fetchProducts(), 
    users: fetchUsers()
  };
};
