import Slider from "react-slick";
import './Homeslider.css'
import SlideOne from '../../../assets/images/slider-1.png'
import SlideTwo from '../../../assets/images/slider-2.png'

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
          <div className="item">
            <img className="w-full" src={SlideOne} alt="" />
          </div>
          <div className="item">
            <img className="w-full" src={SlideTwo} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Homeslider;
