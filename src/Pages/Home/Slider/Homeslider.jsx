import Slider from "react-slick";
import './Homeslider.css'
import SlideOne from '../../../assets/images/slider-1.png'
import SlideTwo from '../../../assets/images/slider-2.png'
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

const Homeslider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows: true
  };

  return (
    <section className="homeSlider py-3 ">
      <div className="container-fluid relative">
        <Slider {...settings} className="home-slider-main relative">
          <div className="item relative">
            <img className="w-full" src={SlideOne} alt="" />
            <div className="info absolute top-[12%] left-[6%]">
              <h1 className="text-7xl font-semibold mb-4">Don't miss amazing <br />
                  grocery deals
              </h1>
              <p className="text-2xl opacity-75">Save upto 50% off on your first order</p>


            </div>
          </div>
          <div className="item">
            <img className="w-full" src={SlideTwo} alt="" />
            <div className="info absolute top-[12%] left-[6%]">
              <h1 className="text-7xl font-semibold mb-4">Fresh Vegetables <br />
                  Big discount
              </h1>
              <p className="text-2xl opacity-75">Save upto 50% off on your first order</p>


            </div>
          </div>
        </Slider>

        <div className="w-[500px] h-16 absolute bottom-[20%] left-[8.5%] overflow-hidden">
            <SendIcon className="absolute left-4 top-5 -rotate-45" fontSize="medium" opacity="0.5"/>
            <input type="text " 
              className=" w-full h-full outline-none pl-12 pr-40 text-xl border-0 rounded-[40px]"
              placeholder="Your email address"
            />
            <Button className="!bg-[#3bb77e] text-white !absolute !right-1 h-14 mt-1 !px-7 !text-[16px] !rounded-[40px] !capitalize">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default Homeslider;
