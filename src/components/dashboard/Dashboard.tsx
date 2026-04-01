import Carousel from "@/micro-components/carousel/Carousel";
import DiscountCard from "@/micro-components/discount-card/DiscountCard";
import FeaturedProducts from "@/micro-components/featured-products/FeaturedProducts";
import NewseLetter from "@/micro-components/news-letter/NewsLetter";
import ServiceCard from "@/micro-components/service-card/ServiceCard";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-carousel-section">
          <Carousel />
        </div>
        <div className="featured-product-container">
          <FeaturedProducts/>
        </div>
        <div className="discount-card-main">
          <DiscountCard/>
        </div>
        <div className="service-card-container">
          <ServiceCard/>
        </div>
        <div className="news-letter-container">
          <NewseLetter/>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
