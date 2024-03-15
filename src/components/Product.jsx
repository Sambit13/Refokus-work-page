import React from "react";
import Button from "./Button";

const Product = ({ product, mover, count }) => {
  return (
    <div className="w-full py-20 h-[23rem] text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-[1200px] mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-medium">{product.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{product.description}</p>
          <div className="flex gap-8">
            {product.live && <Button title="Live website" />}
            {product.case && <Button title="Case study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
