import React from "react";
import style from "./ComponentsStyle.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useInView } from "react-intersection-observer";

function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div ref={ref} className={style.FooterTag}>
        <h1
          className={`${style.productH1} ${
            inView ? "animate__animated animate__backInLeft" : ""
          }`}
        >
          PRODUCT
        </h1>
        <p
          className={`${style.paragraph} ${
            inView ? "animate__animated animate__backInLeft" : ""
          }`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Slider {...setting} className={style.carosel3}>
          <div>
            <img src="./sample1.jpeg" alt="bird1" />
          </div>
          <div>
            <img src="./sample2.jpg" alt="bird2" />
          </div>
          <div>
            <img src="./sample3.jpg" alt="bird3" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Footer;
