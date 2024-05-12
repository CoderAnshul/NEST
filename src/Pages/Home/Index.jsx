import React from "react";
import Homeslider from "./Slider/Homeslider";
import Catslider from "../../component/categary slider/Catslider";
import Banner from "../../component/Banner/Banner";
import {Link} from "react-router-dom";
import "./index.css"
import Product from "../../component/Product/Product";

const Home = () => {

  const filters = [
    "All",
    "Milks & Dairies",
    "Coffee & Teas",
    "Pet Foods ",
    "Meats",
    "Vegetables",
    "Fruits"
  ]

  return (
    <>
      <Homeslider />
      <Catslider />
      <Banner />

      <section className="w-full p-11">
        <div className="w-full">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-4xl font-semibold">Popular Products</h2>
            <div className=" h-auto w-auto flex items-center justify-center">
              <ul className="filterTab flex gap-3 ">

                <Link><li>All</li></Link>
                <Link><li>Milks & Dairies</li></Link>
                <Link><li>Coffee & Teas </li></Link>
                <Link><li>Pet Foods </li></Link>
                <Link><li>Meats </li></Link>
                <Link><li>Vegetables</li></Link>
                <Link><li>Fruits</li></Link>

                {/* {
                  filters.map((item,index) => {
                    return (
                        <Link><li className="hover:text-[#319768] transition-all text-md font-semibold opacity-80" key={index}>{item}</li></Link>
                    )
                  })
                } */}
              </ul>
            </div>
          </div>


          <div className="w-full min-h-30 bg-red-200 flex p-1  flex-wrap shrink-0">
            <div className="w-[19.5%] h-96 bg-sky-100">
              <Product/>
            </div>
            <div className="w-[19.5%] h-96 bg-sky-100">
              <Product/>
            </div>
            <div className="w-[19.5%] h-96 bg-sky-100">
              <Product/>
            </div>
            <div className="w-[19.5%] h-96 bg-sky-100">
              <Product/>
            </div>
            <div className="w-[19.5%] h-96 bg-sky-100">
              <Product/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
