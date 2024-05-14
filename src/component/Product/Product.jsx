import React from "react";
import "./Product.css";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { styled } from '@mui/material/styles';
import Tooltip, {tooltipClasses } from "@mui/material/Tooltip";



const GreenTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(59, 183, 126, 1)",
    color: 'rgba(255, 255, 255, 1)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}));

const Product = (props) => {



  return (

    <div className="productBox product-box">

      {
        props.tag!==null && props.tag!==undefined && 
        <div className={`productBadge product-badge capitalize ${props.tag}`}>{props.tag}</div>
      }

      <div className="imgWrapper relative h-1/2 mb-1 transition-all hover:scale-[1.11] ">
        <Link>
          <img
            className="h-full w-full object-cover scale-75"
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
            alt=""
          />
        </Link>

        <div className="overlay h-full w-full  absolute top-0 flex items-center justify-center transition-all">

          <ul className="flex justify-between w-[110px] h-10 bg-white border-2 border-gray-300 rounded-lg">


            <GreenTooltip title="Add to Wishlist" placement="top">
              <li className="p-1 border-r-2 text-[#3bb77e] hover:text-[#0000009f]">
                <Link>
                  <FavoriteBorderOutlinedIcon />
                </Link>
              </li>
            </GreenTooltip>
            <GreenTooltip c title="Compare" placement="top">
              <li className="p-1 border-r-2 text-[#3bb77e] hover:text-[#0000009f]">
                <Link>
                  <CompareArrowsIcon />
                </Link>
              </li>
            </GreenTooltip>
            <GreenTooltip title="Quick View" placement="top">
              <li className="p-1 border-r-2 text-[#3bb77e] hover:text-[#0000009f]">
                <Link>
                  <RemoveRedEyeOutlinedIcon />
                </Link>
              </li>
            </GreenTooltip>

          </ul>
        </div>
      </div>

      {/* ---------- Info of product section ------------- */}

      <div className="info ">
        <span className="capitalize opacity-60 text-xs">snack</span>
        <h4 className="font-semibold mb-1">
          <Link to="/">Seeds of Change Organic Quinoa, Brown , & Red Rice</Link>
        </h4>
        <Rating
          name="half-rating-read"
          defaultValue={3.5}
          precision={0.5}
          readOnly
          size="small"
        />
        <span className="brand block text-sm">
          By <Link className="text-[#3bb77e]">NestFood</Link>
        </span>

        <div className="flex absolute bottom-3 p-1 w-[225px] justify-between  items-center ">
          <div className="flex items-center">
            <span className="newPrice text-lg  mr-2 text-[#3bb77e] font-bold">
              $28.85
            </span>
            <span className="oldPrice text-xs opacity-75 font-semibold line-through">
              $32.85
            </span>
          </div>

          {/* ---------- Add to cart button ----------- */}

          <Button className="!text-xs !capitalize !bg-[#3bb77d4f] !text-[#309e6b] !font-semibold">
            <ShoppingCartOutlinedIcon className="!text-lg -ml-2 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
