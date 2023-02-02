import React from "react";
import vg from "../assets/p1.JPEG";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillBank,
  AiFillShop,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>KRISHIN</h1>
          <p>An Integral Friend of Farmer</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
          At Krishin we strive to create a difference in farming by bringing timely information, technology and right kind of inputs to achieve better yields and increase the income from agriculture.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
          Krishin is a data-driven full-stack technology platform that makes farming intelligent and empowers farmers to grow their income. We work directly with farmers and aim to improve their way of farming with the help of the right Agri-knowledge and technology. We work with farmers right from the pre-sowing stage to selling their crops, we help them produce more crops in scientific ways.At Krishin, we strive to create a difference in farming by bringing timely information, technology, and the right kinds of inputs to achieve better yields for farmers. We endeavor to bring the best products and knowledge to the farmers.
          Krishin is a one-stop solution for all kinds of inputs for the farmers. Farmers can buy genuine crop protection, crop nutrition, seeds, implements, and Agri hardware at their doorstep. With the Vyapaar feature, Krishin facilitates farmers to sell crops to merchants directly all across the country. Once Farmers deals have done, then we manages all the transportation at minimal rate, if farmers wants to sell their crop to us then they can easiy sell to us at market price or even at higher price. We are also roviding crop warehousing so that farmers can sell their crops at higher rate when the demand is high.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Online</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>E Store</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillShop />
              <p>Market</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillBank />
              <p>Finance</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;