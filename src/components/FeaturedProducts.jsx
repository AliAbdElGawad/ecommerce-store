import { useStore } from "../contexts/StoreContext";

const FeaturedProducts = () => {
  const { products } = useStore();
  console.log(products);
  return <div>FeaturedProducts</div>;
};

export default FeaturedProducts;
