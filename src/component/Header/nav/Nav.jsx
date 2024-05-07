import Button from "@mui/material/Button";
import "../nav/Nav.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
// import '../../../assets/css/style.css'

const Nav = () => {
  return (
    <div className="nav h-[70px] flex ">
      <div className="w-full px-4 border-y-2 border-[#0000001f] flex items-center justify-between ">
        <div className="bg-g bg-[#2dbd7a] h-[40px] min-w-[240px] rounded-lg flex mr-5 ">
          <Button className="catTab">
            <GridViewIcon className="absolute left-3 " />
            Browse All Categories
            <ExpandMoreIcon className="arrow absolute right-1 top-1/7" />
          </Button>
        </div>
        <div className="flex justify-between h-[40px] part2">
          <ul className="flex">
            <li>
              <Button>
                <Link>Home</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link>About</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link>Shop</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link>Vendors</Link>
              </Button>
            </li>
            <li className="mega-menu">
              <Button>
                <Link>
                  Mega Menu{" "}
                  <ExpandMoreIcon
                    className="arrow absolute right-1 top-1/4"
                    fontSize="small"
                  />
                </Link>
              </Button>

              <div className="dropdown-opt absolute translate-x-[-51%] bg-white rounded-lg min-h-[300px] w-[94vw]  transition-all text-start overflow-y-scroll shadow-[0_8px_10px_rgb(0,0,0,0.07)] flex gap-5 py-4 px-5">
                <div className="w-[20%] h-full p-2">
                  <h1 className="text-[#3bb77e] font-semibold  text-2xl mb-3">
                    Fruit & Vegetables
                  </h1>
                  <ul>
                    <li>
                      <Link to="/">Meat & Poultry</Link>
                    </li>
                    <li>
                      <Link to="/">Fresh Vegetables</Link>
                    </li>
                    <li>
                      <Link to="/">Herbs & Seasonings</Link>
                    </li>
                    <li>
                      <Link to="/">Cuts & Sprouts</Link>
                    </li>
                    <li>
                      <Link to="/">Exotic Fruits</Link>
                    </li>
                    <li>
                      <Link to="/">Packaged Produce</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-[20%] h-full  p-2">
                  <h1 className="text-[#3bb77e] font-semibold  text-2xl mb-3">
                    Breakfast & Dairy
                  </h1>
                  <ul>
                    <li>
                      <Link to="/">Milk & Flavoured Milk</Link>
                    </li>
                    <li>
                      <Link to="/">Butter</Link>
                    </li>
                    <li>
                      <Link to="/">Eggs Substitutes</Link>
                    </li>
                    <li>
                      <Link to="/">Marmalades</Link>
                    </li>
                    <li>
                      <Link to="/">Sour Cream</Link>
                    </li>
                    <li>
                      <Link to="/">Cheese</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-[20%] h-full p-2">
                  <h1 className="text-[#3bb77e] font-semibold  text-2xl mb-3">
                    Meat & Seafood
                  </h1>
                  <ul>
                    <li>
                      <Link to="/">Breakfast Sausage</Link>
                    </li>
                    <li>
                      <Link to="/">Dinner Sausage</Link>
                    </li>
                    <li>
                      <Link to="/">Chicken</Link>
                    </li>
                    <li>
                      <Link to="/">Sliced Deli Meat</Link>
                    </li>
                    <li>
                      <Link to="/">Wild Caught Fillets</Link>
                    </li>
                    <li>
                      <Link to="/">Crab and Shellfish</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-[40%] h-full bg-red-200 rounded-xl relative">
                  <div className="h-[70px] flex justify-center items-center flex-col absolute w-[70px] rounded-full bg-[#dbae4e] right-8 top-11">
                    <h2 className="font-bold">25%</h2>
                    <p className="font-semibold -mt-1">off</p>
                  </div>
                  <div className="h-[160px] ml-4 p-2 flex-col absolute w-[170px]  top-11">
                    <h5 className="font-normal text-sm mb-1">HOT DEALS</h5>
                    <h2 className="font-bold text-xl leading-6 opacity-85 mb-3">
                      Don't miss Trending
                    </h2>
                    <Button
                      style={{
                        width: "100px",
                        whiteSpace: " nowrap",
                        backgroundColor: "#3bb77e",
                        borderRadius: "20px",
                      }}
                    >
                      Shop now
                    </Button>
                  </div>
                  <img
                    className="w-full h-auto"
                    src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li>
              <Button>
                <Link>Blog</Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link>
                  Pages
                  <ExpandMoreIcon
                    className="arrow absolute right-1 top-1/4"
                    fontSize="small"
                  />
                </Link>{" "}
              </Button>
              <div className="dropdown-opt absolute bg-[#ffffff] max-h-[250px] w-[180px] transition-all text-start overflow-y-scroll -left-6 shadow-[0_8px_10px_rgb(0,0,0,0.07)]">
                <ul>
                  <li>
                    <Link to="/about">
                      <Button> About Us </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <Button>Contact </Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/account">
                      <Button> My Account</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <Button> Login</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <Button>Register</Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/forgot-password">
                      <Button> Forgot Password</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/reset-password">
                      <Button> Reset Password</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/purchase-guide">
                      <Button> Purchase Guide</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">
                      <Button> Privacy Policy</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <Button> terms of Service</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Button>
                <Link>Contact</Link>
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex -mr-2">
          <div className="w-[200px] min-h-[42px] flex items-center p-2">
            <HeadsetMicIcon
              className="mr-1"
              style={{ fontSize: "35px" }}
              opacity="0.7"
            />
            <span className="">
              <h3 className="info text-[#2dbd7a] text-3xl   font-semibold">
                1900-888
              </h3>
              <p className="text-xs ml-2 -mt-1 font-semibold opacity-70">
                24/7 Support Center
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
