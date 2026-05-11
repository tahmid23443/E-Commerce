import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const slides = [
  { id: 1, image: "/hero_banner.png" },
  { id: 2, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&h=500&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900&h=500&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&h=500&fit=crop" },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul className='flex gap-2 absolute bottom-3 left-1/2 -translate-x-1/2'>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <button className='w-1 md:w-3 h-1 md:h-3 bg-white rounded-full'></button>
    ),
  };

  return (
    <section>
      <div className="container flex gap-4 md:gap-7">

        {/* Main slider — Link নেই, তাই slide এ click করলে page change হবে না */}
        <div className='w-[66%] h-[50%]'>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id}>
                <img
                  src={slide.image}
                  alt={`Banner ${slide.id}`}
                  className='w-full object-cover'
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Side images — আগের মতোই */}
        <div className='w-[34%] flex flex-col space-y-4 md:space-y-7'>
          <Link>
            <img src="/hero1.png" alt="" className='w-full' />
          </Link>
          <Link>
            <img src="/hero2.png" alt="" className='w-full' />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Banner;
