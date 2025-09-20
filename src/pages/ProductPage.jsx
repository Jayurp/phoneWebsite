import Renderer from "../components/Renderer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchNewPhones,
  fetchCpo,
  fetchAsisPlus,
  fetchAsis,
} from "../services/fetchData";
import { phoneCDN } from "../templates/images";

export default function ProductPage() {
  const location = useLocation();

  const [pageData, setPageData] = useState([
    {
      type: "hero",
      title: "Product Suite: Innovative Retail Tech",
      subtitle:
        "Explore our range of solutions designed to revolutionize your retail operations.",
      cta: "View All Products",
      background: {
        image:
          "https://images.unsplash.com/photo-1518770660439-463652d807e3?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        backups: [
          "https://cdn.pixabay.com/photo/2016/09/21/04/46/computer-1684341_1280.jpg",
          "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
      },
    },
    {
      type: "product_cards",
      title: "Featured Retail Solutions",
      subtitle:
        "From inventory management to customer engagement, we have you covered.",
      items: [
        {
          image:
            "https://images.unsplash.com/photo-1556742502-ec7c7d41f53e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "POS System Pro",
          description:
            "Advanced point-of-sale system for efficient transactions and reporting.",
          path: "/product-detail/pos-system-pro",
        },
      ],
    },
    {
      type: "cta_banner",
      title: "Find the Perfect Product for You",
      subtitle:
        "Our experts are ready to guide you to the best solutions for your retail business.",
      cta: "Schedule a Demo",
    },
  ]);

  const apiFunction = {
    "/products-new": fetchNewPhones,
    "/products-cpo": fetchCpo,
    "/products-asis-plus": fetchAsisPlus,
    "/products-asis": fetchAsis,
  };

  useEffect(() => {
    const getData = async () => {
      const data = await apiFunction[location.pathname]();
      setPageData([
        pageData[0],
        {
          type: "product_cards",
          title: "Featured Retail Solutions",
          subtitle:
            "From inventory management to customer engagement, we have you covered.",
          items: mapPhoneData(data),
        },
        pageData[2],
      ]);
    };
    getData();
  }, [location]);

  function mapPhoneData(phones) {
    const phoneDescriptions = {
      "iPhone 11": "The classic iPhone with great performance and reliability.",
      "iPhone 12": "Sleek design with improved camera and 5G support.",
      "iPhone 13": "Powerful everyday device with longer battery life.",
      "iPhone 13 Pro":
        "Professional-grade camera system with ProMotion display.",
      "iPhone 13 Pro Max":
        "Maximized performance with bigger display and battery.",
      "iPhone 14": "Next-gen iPhone with safety features like crash detection.",
      "iPhone 14 Pro":
        "Dynamic Island, ProMotion, and powerful A16 Bionic chip.",
      "iPhone 14 Pro Max": "The ultimate Pro experience with large display.",
      "iPhone 15": "Advanced cameras, longer battery, and premium design.",
      "iPhone 15 Pro": "Lightweight titanium design with powerful performance.",
      "iPhone 15 Pro Max":
        "Best-in-class iPhone experience with exclusive telephoto.",
      "iPhone 16": "Next-generation iPhone with upgraded performance.",
      "iPhone 16 Pro": "Pro-level performance with stunning design.",
      "iPhone 16 Pro Max":
        "Top-tier iPhone with the biggest display and features.",
    };

    return phones.map((phone) => {
      // Find the images array from phoneCDN
      const cdnEntry = phoneCDN.find((p) => p.name === phone.name);
      return {
        image: cdnEntry ? cdnEntry.images[0] : [],
        title: phone.name + ` (${phone.color})`,
        description:
          phoneDescriptions[phone.name] ||
          "Premium smartphone with advanced features.",
        path: `/product-detail/${phone.name
          .toLowerCase()
          .replace(/\s+/g, "-")}--${phone.color
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      };
    });
  }

  if (!pageData) {
    return (
      <div className="container section text-center text-red-500">
        Product page content not found.
      </div>
    );
  }

  return (
    <div className="product-page">
      <Renderer blocks={pageData} />
    </div>
  );
}
