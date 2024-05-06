import Button from "@mui/material/Button";
import '../nav/Nav.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GridViewIcon from '@mui/icons-material/GridView';
import {Link} from 'react-router-dom'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import { useState } from "react";
// import '../../../assets/css/style.css'

const Nav = () => {

  

  return (
    <div className='nav h-[70px] flex '>
        <div className='w-full px-4 border-y-2 border-[#0000001f] flex items-center justify-between '>
            <div className="bg-g bg-[#2dbd7a] h-[40px] w-[240px] rounded-lg flex mr-5 ">
                <Button className="catTab">
                  <GridViewIcon className="absolute left-3 "/>
                  Browse All Categories
                <ExpandMoreIcon className="arrow absolute right-1 top-1/7" />
                </Button>
            </div>
            <div className="flex justify-between h-[40px] part2">
                <ul className="flex">
                  <li>
                    <Button><Link>Home</Link></Button>
                  </li>
                  <li>
                    <Button><Link>About</Link></Button>
                  </li>
                  <li>
                    <Button><Link>Shop</Link></Button>
                  </li>
                  <li>
                    <Button><Link>Vendors</Link></Button>
                  </li>
                  <li className="mega-menu">
                    <Button><Link>Mega Menu <ExpandMoreIcon className="arrow absolute right-1 top-1/4" fontSize="small" /></Link></Button>

                    <div className="dropdown-opt absolute translate-x-[-51%] bg-[#d1d1d1] rounded-lg min-h-[300px] w-[94vw]  transition-all text-start overflow-y-scroll shadow-[0_8px_10px_rgb(0,0,0,0.07)] flex gap-5 py-4 px-5">

                      <div className="w-[20%] h-full bg-red-200 p-2">
                        <h1 className="text-[#3bb77e] font-semibold  text-xl mb-2">Fruit & Vegetables</h1>
                          {/* <ul>
                            <Button><li>Meat & Poultry</li></Button>
                            <Button><li>Fresh Vegetables</li></Button>
                            <Button><li>Herbs & Seasonings</li></Button>
                            <Button><li>Cuts & Sprouts</li></Button>
                            <Button><li>Exotic Fruits</li></Button>
                            <Button><li>Packaged Produce</li></Button>
                          </ul> */}
                      </div>
                      <div className="w-[20%] h-full bg-red-200 p-2">
                        <h1 className="text-[#3bb77e] font-semibold  text-xl mb-2">Fruit & Vegetables</h1>
                          {/* <ul>
                            <Button><li>Meat & Poultry</li></Button>
                            <Button><li>Fresh Vegetables</li></Button>
                            <Button><li>Herbs & Seasonings</li></Button>
                            <Button><li>Cuts & Sprouts</li></Button>
                            <Button><li>Exotic Fruits</li></Button>
                            <Button><li>Packaged Produce</li></Button>
                          </ul> */}
                      </div>
                      <div className="w-[20%] h-full bg-red-200 p-2">
                        <h1 className="text-[#3bb77e] font-semibold  text-xl mb-2">Fruit & Vegetables</h1>
                          {/* <ul>
                            <Button><li>Meat & Poultry</li></Button>
                            <Button><li>Fresh Vegetables</li></Button>
                            <Button><li>Herbs & Seasonings</li></Button>
                            <Button><li>Cuts & Sprouts</li></Button>
                            <Button><li>Exotic Fruits</li></Button>
                            <Button><li>Packaged Produce</li></Button>
                          </ul> */}
                      </div>
                      <div className="w-[40%] h-full bg-red-200 rounded-xl">
                          <img className="w-full h-auto" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" alt="" />
                      </div>
                    
                    </div>

                  </li>
                  <li>
                    <Button><Link>Blog</Link></Button>
                  </li>
                  <li >
                    <Button><Link>Pages<ExpandMoreIcon className="arrow absolute right-1 top-1/4" fontSize="small" /></Link> </Button>
                      <div className="dropdown-opt absolute bg-[#ffffff] max-h-[250px] w-[180px] transition-all text-start overflow-y-scroll -left-6 shadow-[0_8px_10px_rgb(0,0,0,0.07)]">
                    
                      <ul>
                        <li><Link to="/about"><Button> About Us </Button></Link></li>
                        <li><Link to="/contact"><Button>Contact </Button> </Link></li>
                        <li><Link to="/account"><Button> My Account</Button></Link></li>
                        <li><Link to="/login"><Button> Login</Button></Link></li>
                        <li><Link to="/register"><Button>Register</Button> </Link></li>
                        <li><Link to="/forgot-password"><Button> Forgot Password</Button></Link></li>
                        <li><Link to="/reset-password"><Button> Reset Password</Button></Link></li>
                        <li><Link to="/purchase-guide"><Button> Purchase Guide</Button></Link></li>
                        <li><Link to="/privacy-policy"><Button> Privacy Policy</Button></Link></li>
                        <li><Link to="/services"><Button> terms of Service</Button></Link></li>
                      </ul>
                      </div>
                  </li>
                  <li>
                    <Button><Link>Contact</Link></Button>
                  </li>
                </ul>
            </div>
            <div className="flex -mr-2">
                <div className="w-[200px] min-h-[42px] flex items-center p-2">
                  <HeadsetMicIcon className="mr-1" style={{fontSize:"35px"}} opacity="0.7"/>
                  <span className="">
                      <h3 className="info text-[#2dbd7a] text-3xl   font-semibold">1900-888</h3>
                      <p className="text-xs ml-2 -mt-1 font-semibold opacity-70">24/7 Support Center</p>
                  </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav