import React from "react";
import "./Product.css";
import Rating from '@mui/material/Rating';

const Product = () => {
  return (
    <div className="productBox w-full overflow-hidden h-full p-3 rounded-xl  border-gray-300 hover:border-[#3bb77e] transition-all border-1 hover:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] translate-y-1 hover:mt-[-5px]">
      <div className="imgWrapper h-1/2 mb-1">
        <img
          className="h-full w-full object-cover scale-75"
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
          alt=""
        />
      </div>

      {/* ---------- Info of product section ------------- */}

      <div className="info">
        <span className="capitalize opacity-60 text-xs">snack</span>
        <h4 className="font-semibold mb-1">Seeds of Change Organic Quinoa, Brown , & Red Rice</h4>
        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly size="small"/>
      </div>

    </div>
  );
};

export default Product;
