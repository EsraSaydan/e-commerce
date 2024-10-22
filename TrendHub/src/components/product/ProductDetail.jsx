import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import like from "../../assets/icon/like.png";
import basket from "../../assets/icon/basket.png";
import more from "../../assets/icon/more.png";

const products = [
  {
    id: 1,
    title: "Floating Phone",
    price: "$1,139.33",
    discount: "$899.99",
    department: "Tech Department",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    availability: "In Stock",
    images: [
      { url: "https://picsum.photos/id/1001/506/506" },
      { url: "https://picsum.photos/id/1002/506/506" },
    ],
  },
  {
    id: 2,
    title: "Floating Phone",
    price: "$1,139.33",
    discount: "$899.99",
    department: "Tech Department",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    availability: "In Stock",
    images: [
      { url: "https://picsum.photos/id/1002/506/506" },
      { url: "https://picsum.photos/id/1003/506/506" },
    ],
  },
  {
    id: 3,
    title: "Floating Phone",
    price: "$1,139.33",
    discount: "$899.99",
    department: "Tech Department",
    description:
      "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    availability: "In Stock",
    images: [
      { url: "https://picsum.photos/id/1001/600/600" },
      { url: "https://picsum.photos/id/1002/600/600" },
    ],
  },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(
      (prod) => prod.id === parseInt(productId)
    );
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="flex justify-center bg-bgGray py-10 lg:py-16">
      <div className="w-[85%] lg:w-[75%]">
        {/* Home ve Shop linkleri */}
        <div className="py-5 px-3 lg:px-9">
          <Link
            className="font-bold text-m font-montserrat text-productGraphDesign hover:underline"
            to="/"
          >
            Home
          </Link>
          <i className="fa-solid fa-chevron-right m-2 text-productGray"></i>
          <Link
            className="font-bold text-m text-productGray font-montserrat hover:underline"
            to="/shop"
          >
            Shop
          </Link>
        </div>

        {/* Ürün Detayları ve Görseller */}
        <div className="flex justify-between gap-10 max-md:flex-col">
          {/* Sol Taraf - Görsel Bölümü */}
          <div className="lg:w-[40%] lg:ml-5">
            <div className="relative aspect-[1/1] pb-5">
              <img
                src={product.images[0].url}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Küçük Resimler */}
            <div className="flex gap-2 mt-2 ml-[10px] lg:ml-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-16 h-16 object-cover cursor-pointer border-2 border-gray-300 opacity-70"
                />
              ))}
            </div>
          </div>

          {/* Sağ Taraf - Ürün Detayları */}
          <div className="lg:w-[55%] px-6 lg:px-1 max-md:w-full font-montserrat flex flex-col justify-between lg:mb-[90px] space-y-6">
            <h4 className="text-2xl text-productGraphDesign font-bold mb-4">
              {product.title}
            </h4>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className="ml-2 text-sm text-gray-600 font-bold">10 Reviews</p>
            </div>

            <div className="text-3xl font-bold text-gray-700 mb-4">
              {product.price}
            </div>
            <div className="flex items-center mb-2">
              <p className="text-lg font-bold text-iconGray">Availability:</p>
              <p className="text-lg font-bold text-customLightBlue ml-2">
                {product.availability}
              </p>
            </div>
            <p className="text-lightTextGray font-bold mb-6">
              {product.description}
            </p>
            <hr className="lg:-translate-y-4 font-bold border-productGray" />

            {/* Renk Seçenekleri */}
            <div className="flex gap-3">
              <div className="bg-customLightBlue w-[26px] h-[26px] rounded-full"></div>
              <div className="bg-productGreen w-[26px] h-[26px] rounded-full"></div>
              <div className="bg-alert w-[26px] h-[26px] rounded-full"></div>
              <div className="bg-black w-[26px] h-[26px] rounded-full"></div>
            </div>

            {/* Aksiyon Butonları */}
            <div className="flex items-center gap-4">
              <button className="bg-customLightBlue text-white px-4 py-2 rounded-md">
                Select Options
              </button>
              <img src={like} className="text-2xl cursor-pointer " />
              <img
                src={basket}
                className="fa-solid fa-cart-shopping text-2xl cursor-pointer"
              />
              <img
                src={more}
                className="fa-solid fa-eye text-2xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
