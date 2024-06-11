import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Simaksi Gn. Sumbing"
            price="60.000"
            color="1 hari"
            badge={true}
            des="Gunung Sumbing, dengan ketinggian 3.371 meter, adalah gunung berapi aktif di Jawa Tengah, Indonesia, terletak di perbatasan Temanggung, Wonosobo, dan Magelang. Sebagai stratovolcano, gunung ini terbentuk dari lapisan lava dan abu vulkanik, dengan aktivitas fumarol yang masih ada di dekat puncaknya. Nama Sumbing, yang berarti retak dalam bahasa Jawa, berasal dari legenda setempat tentang pertarungan dua raksasa yang juga membentuk Gunung Sindoro di dekatnya."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Simaksi Gn. Gede"
            price="50.000"
            color="1 hari"
            badge={true}
            des="Gunung Gede, dengan ketinggian 2.958 meter, adalah gunung berapi aktif yang terletak di Jawa Barat, Indonesia, tepatnya di kawasan Taman Nasional Gede Pangrango. Sebagai bagian dari kompleks vulkanik bersama Gunung Pangrango, Gunung Gede terkenal dengan keragaman hayati dan ekosistemnya yang kaya, serta aktivitas fumarol yang masih ada di dekat puncaknya. Nama Gede, yang berarti besar dalam bahasa Sunda, mencerminkan ukurannya yang dominan di kawasan tersebut."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Simaksi Gn. Semeru"
            price="75.000"
            color="1 hari"
            badge={true}
            des="Gunung Semeru, dengan ketinggian 3.676 meter, adalah gunung berapi tertinggi di Pulau Jawa, Indonesia, terletak di Provinsi Jawa Timur, tepatnya di kawasan Taman Nasional Bromo Tengger Semeru. Sebagai stratovolcano, Gunung Semeru terbentuk dari lapisan lava dan abu vulkanik dan dikenal dengan aktivitas vulkaniknya yang konsisten. Nama Semeru diambil dari nama gunung suci dalam kosmologi Hindu, yang berarti pusat dunia."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Simaksi Gn. Merbabu"
            price="35.000"
            color="1 hari"
            badge={false}
            des="Gunung Merbabu, dengan ketinggian 3.145 meter, adalah gunung berapi yang terletak di Jawa Tengah, Indonesia, berdekatan dengan Gunung Merapi. Terkenal dengan pemandangan alamnya yang indah dan padang rumputnya yang luas, Gunung Merbabu menawarkan berbagai jalur pendakian yang menarik. Meskipun tidak seaktif Gunung Merapi, Gunung Merbabu tetap merupakan stratovolcano yang penting dalam sejarah geologi Jawa Tengah."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Simaksi Gn. Gede"
            price="50.00"
            color="1 hari"
            badge={false}
            des="Gunung Gede, dengan ketinggian 2.958 meter, adalah gunung berapi aktif yang terletak di Jawa Barat, Indonesia, tepatnya di kawasan Taman Nasional Gede Pangrango. Sebagai bagian dari kompleks vulkanik bersama Gunung Pangrango, Gunung Gede terkenal dengan keragaman hayati dan ekosistemnya yang kaya, serta aktivitas fumarol yang masih ada di dekat puncaknya. Nama Gede, yang berarti besar dalam bahasa Sunda, mencerminkan ukurannya yang dominan di kawasan tersebut."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
