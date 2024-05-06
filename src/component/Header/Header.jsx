import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import Logo from "../../assets/images/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../SelectDrop/Select";
import axios from "axios";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import iconCompare from "../../assets/images/icon-compare.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconCart from "../../assets/images/icon-cart.svg";
import iconUser from "../../assets/images/icon-user.svg";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Nav from "./nav/Nav"




const Header = () => {
  const [categories, setCategories] = useState([
    "Milks and Dairies",
    "Wines and Drinks",
    "Clothing & Beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast foot",
    "Baking Material",
    "Vegetable",
    "Fresh Fruit",
    "Break and Juice",
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ----------- fetching country --------------
  const countryList = [];
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  });

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((item, index) => {
            countryList.push(item.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  

  return (
    <>
      <header className=" w-screen">
        <div className="nav min-h-24 w-full px-6 flex items-center space-between  ">
          <div className="overflow-hidden p-1 mr-16 ">
            <img src={Logo} className="h-[55px]" />
          </div>

          {/* --------------- headerSearch starts here ----------------- */}

          <div className="headerSearch flex items-center space-between px-2 border-2 border-[#2dbd7a7e] lg:w-[520px] h-[40px] sm:w-[80%] md:w-[480px] relative">
            {/* -------- categories drawer ----------- */}
            <Select
              data={categories}
              placeholder="All Categories"
              icon={false}
            />

            <div className="search w-[80%] relative ml-4">
              <input
                type="text"
                placeholder="Search for item"
                className="focus:bg-blue-400 w-full h-[30px]  outline-none border-0 bg-transparent"
              />
              <SearchIcon className="absolute right-1 top-1 cursor-pointer opacity-30" />
            </div>
          </div>
          {/* --------------- headerSearch ends here ----------------- */}

          {/* ------------- location Drawer -------------- */}

          <div className=" h-[40px] border-1 rounded-lg shadow-[0_8px_10px_rgb(0,0,0,0.07)] flex items-center justify-center px-3 ml-8 mr-8">
            <Select
              data={countryList}
              placeholder="Your location"
              icon={
                <LocationOnOutlinedIcon
                  style={{
                    marginRight: "4px",
                    marginLeft: "-8px",
                    opacity: "0.5",
                    fontSize: "20px",
                  }}
                />
              }
            />
          </div>

          {/* ------------- location Drawer Ends -------------- */}

          {/* ------------- Third part of nav ---------------- */}

          <div className="choicesdiv h-[40px] w-[440px]  flex items-center justify-between px-1 relative">
          <ClickAwayListener onClickAway={() => setDrawerOpen(false)}>
            <ul className="flex justify-between p-1 w-full">
              <li>
                <span className="flex relative">
                  <img src={iconCompare} className="mr-1 w-5" />
                  <span className="h-4 w-4 font-normal text-xs rounded-full text-center text-white bg-[#2dbd7a] absolute left-2 -top-2">
                    3
                  </span>
                  Compare
                </span>
              </li>
              <li>
                <span className="flex relative">
                  <img src={iconHeart} className="mr-1 w-5" />
                  <span className="h-4 w-4 font-normal text-xs rounded-full text-center text-white bg-[#2dbd7a] absolute left-2 -top-2">
                    6
                  </span>
                  Wishlist
                </span>
              </li>
              <li>
                <span className="flex relative">
                  <img src={iconCart} className="mr-1 w-5" />
                  <span className="h-4 w-4 font-normal text-xs rounded-full text-center text-white bg-[#2dbd7a] absolute left-2 -top-2">
                    8
                  </span>
                  Cart
                </span>
              </li>
              <li >
              
                <span className="flex relative " onClick={() => setDrawerOpen(!drawerOpen)}>
                  <img src={iconUser} className="mr-1 w-5" />
                  Account
                </span>

                {drawerOpen === true && (
                  <ul className="dropDownMenu absolute z-[99] bg-white top-[100%] p-2 right-0 w-[160px] shadow-[0_8px_10px_rgb(0,0,0,0.07)]">
                    <li>
                      <Button><AccountCircleOutlinedIcon/>
                        My account
                      </Button>
                    </li>
                    <li>
                      <Button><LocationOnOutlinedIcon/>
                        Order Tracking
                      </Button>
                    </li>
                    <li>
                      <Button><ShoppingBagOutlinedIcon/>
                        My Wishlist
                      </Button>
                    </li>
                    <li>
                      <Button><TuneOutlinedIcon/>
                        Setting
                      </Button>
                    </li>
                    <li>
                      <Button><LogoutOutlinedIcon/>
                        Sign out
                      </Button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
              </ClickAwayListener>
          </div>
        </div>

      </header>
        <Nav/>
    </>
  );
};

export default Header;
