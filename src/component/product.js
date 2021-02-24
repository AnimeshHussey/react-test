import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CheckboxExampleToggle } from "./common/toogleButton";
import CardComponent from "./common/card";

const Products = () => {
  const [filteredProducts, setfilteredProducts] = useState([]);
  const [inStock, setinStock] = useState(true);
  const product = useSelector((state) => ({
    items: state.ProductReducer.products,
  }));

  useEffect(() => {
    if (Array.isArray(product.items) && product?.items?.length > 0) {
      setfilteredProducts(product.items);
    }
  }, [product.items]);

  useEffect(() => {
    const filteredarr =
      product?.items?.filter((item) => item.in_stock === inStock) || [];
    if (inStock) {
      setfilteredProducts(filteredarr || []);
    } else {
      setfilteredProducts(product?.items || []);
    }
  }, [inStock]);

  const toggleButton = (ischecked) => {
    setinStock(ischecked);
  };

  return (
    <>
      <div>
        <span style={{ fontSize: "20px", margin: "10px" }}>In Stock</span>
        <CheckboxExampleToggle toggleButton={toggleButton} />
      </div>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          flex: 1,
        }}
      >
        {filteredProducts.map((item) => (
          <CardComponent item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
