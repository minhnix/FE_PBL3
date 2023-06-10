import Slider from "react-slick";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/esm/Image";
const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div id="home" style={{ paddingTop: "62px" }}></div>
      {/* <Carousel controls={false} fade={true}>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="Slider.png"
                        alt="First slide"
                        style={{ height: "470px" }}
                    />

                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="Slider2.png"
                        alt="Second slide"
                        style={{ height: "470px" }}
                    />

                </Carousel.Item>
            </Carousel> */}
      <Slider {...settings}>
        <div>
          <Image src="Slider.png" width={"100%"} height={"570px"}></Image>
        </div>
        <div>
          <Image src="Slider1.png" width={"100%"} height={"570px"}></Image>
        </div>
        <div>
          <Image src="Slider3.png" width={"100%"} height={"570px"}></Image>
        </div>{" "}
        <div>
          <Image src="Slider2.png" width={"100%"} height={"570px"}></Image>
        </div>{" "}
        <div>
          <Image src="Slider4.png" width={"100%"} height={"570px"}></Image>
        </div>
      </Slider>
    </>
  );
};

export default ImageSlider;
