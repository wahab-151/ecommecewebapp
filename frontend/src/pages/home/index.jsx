import React from "react";
import BannerHomeComponent from "../../components/bannersHome";
import Carousel from "../../components/carousel";
import HomeEndBanner from "../../components/homeEndBanner";
import carouselImage1 from "../../assets/item1.png";
import carouselImage2 from "../../assets/womenbanner.png";
import NewCollection from "../../components/newCollectionHome";
import CarouselItem from "../../components/carouselItem";
import MenCategory from "../../components/menCategory";
import WomenCategory from "../../components/womenCatrgory";

export default function Home() {
  return (
    <div>
      <Carousel
        arrows={false}
        dots={true}
        autoplay={true}
        autoplaySpeed={5000}
        dotsClass="slick-dots slick-thumb"
      >
        {[carouselImage1, carouselImage2].map((item) => (
          <CarouselItem image={item} />
        ))}
      </Carousel>
      <MenCategory />
      <NewCollection />
      <WomenCategory />
      <BannerHomeComponent />
      <HomeEndBanner />
    </div>
  );
}
