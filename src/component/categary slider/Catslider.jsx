import React from "react";
import Slider from "react-slick";

const Catslider = () => {
  const [itemBg, setItemBg] = React.useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <div className="catSliderSection h-auto mt-2">
      <div className="w-full h-auto py-5 px-11">
        <h1 className="text-4xl font-semibold mb-4">Featured Category</h1>


        <Slider {...settings} className="cat_slider_main w-full ">


          {
          
          itemBg.length !== 0 &&
            itemBg.map((item, index) => {
              return (
                <div key={index} className="item p-1 ">
                  <div
                    className="info flex flex-col items-center rounded-lg justify-between mr-[10px] ml-[10px] p-2   transition-all hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:translate-y-[-6px]"
                    style={{ background: itemBg[index] }}
                  >
                    <img
                      className="h-30 w-auto"
                      src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png"
                    />
                    <h5 className="text-lg -mt-2">Cake & Milk</h5>
                    <p className="opacity-75 text-sm">26 items</p>
                  </div>
                </div>
              );
            })
            
            }
        </Slider>
      </div>
    </div>
  );
};

export default Catslider;
