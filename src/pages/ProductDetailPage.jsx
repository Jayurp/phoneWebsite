import { useParams, Link } from "react-router-dom";
import { pageData } from "../data/data";
import Renderer from "../components/Renderer";
import { getPhoneByModelAndColor } from "../templates/productDetails";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const { productId } = useParams();

  const location = useLocation();

  const [product, setProduct] = useState({});

  useEffect(() => {
    // Remove the '/product-detail/' prefix

    const cleaned = location.pathname.replace("/product-detail/", "");

    let str = cleaned;

    // Split model and color using '--' as separator
    const [modelPart, colorPart] = str.split("--");

    if (!modelPart || !colorPart) {
      return { error: "Invalid URL format" };
    }

    // Convert model part from kebab-case to normal title case
    const model = modelPart
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Convert color part from kebab-case to normal title case
    const color = colorPart
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setProduct(getPhoneByModelAndColor(model, color));
  }, [location]);

  // Find the product_detail block in pageData
  const productDetailBlock = pageData.pages
    .find((page) => page.name === "Product Detail")
    ?.content.find((block) => block.type === "product_detail");

  // const product = productDetailBlock?.products[productId];

  if (!product) {
    return (
      <div className="container section text-center text-red-500">
        <h1 className="h1 mb-4">Product Not Found</h1>
        <p className="text-body mb-8">
          The product you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-primary text-secondary py-3 px-8 rounded-full h3 hover:bg-gray-800 transition-colors duration-300 shadow-md"
        >
          Go to Home
        </Link>
      </div>
    );
  }

  // Create a block structure for the Renderer
  const blocksToRender = [
    {
      type: "product_detail",
      title: product.title,
      subtitle: product.subtitle,
      description: product.description,
      image: product.image, // Initial main image
      features: product.features,
      cta: product.cta,
      gallery: product.gallery || [], // Pass the full gallery
      relatedProducts: product.relatedProducts,
      products: productDetailBlock.products, // Pass the entire productDetailBlock.products for related products lookup
    },
  ];

  return (
    <div className="product-detail-page">
      <Renderer blocks={blocksToRender} />
    </div>
  );
}
