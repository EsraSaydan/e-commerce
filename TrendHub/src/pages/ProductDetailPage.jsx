import BestSellerProduct from "../components/product/BestSellerProduct";
import { ProductDescription } from "../components/product/ProductDescription";
import ProductDetail from "../components/product/ProductDetail";

const ProductDetailPage = () => {
  return (
    <>
      <ProductDetail />
      <ProductDescription />
      <BestSellerProduct />
    </>
  );
};

export default ProductDetailPage;
