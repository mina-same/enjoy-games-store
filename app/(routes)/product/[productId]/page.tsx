import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { Gallery } from "@/components/gallery";
import { Info } from "@/components/info";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";
import ProductTabs from "@/components/ProductTabs";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className="bg-gradient-to-bl from-[#7f36b9] via-[#6a3fbf] to-[#625bff] py-[80px] px-8">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Product Gallery */}
            <Gallery images={product.images} />
            
            {/* Product Info Section */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>

          {/* Product Tabs */}
          <ProductTabs description={product.productDescription} />

          {/* Suggested Products */}
          <ProductList title="منتجات مشابهة" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
