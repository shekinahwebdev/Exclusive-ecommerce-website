import ProductCard from "./ProductCard";
import { useHomePageContext } from "../../context/homepagecontext";

const MainItems = () => {
  const products = useHomePageContext();
  return (
    <section className="flex flex-wrap gap-6 justify-center items-start px-5 py-5">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          imageSrc={product.imageSrc}
          title={product.title}
          price={product.price}
          initialPrice={product.initialPrice}
          rate={product.rate}
        />
      ))}
    </section>
  );
};

export default MainItems;
