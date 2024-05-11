// import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
// import reviewData from "../reviewData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviewData from "../reviewData";
import Slider from "react-slick";
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  // const reviewData = reviewData;
  return (
    <section className=" h-[550px] bg-gray-100 ">
      <div className=" ">
        <p className="text-black text-2xl font-semibold text-center p-8">
          TESTIMONIALS
        </p>
      </div>
      <div className="flex justify-center items-center mt-7">
        <div className=" w-[80vw] ">
          <Slider {...settings}>
            {reviewData.map((review) => {
              return (
                <div className="bg-white w-[290px] h-[360px] rounded-md sha">
                  <div className=" ">
                    <img
                      className="h-[100px] w-[100px] p-2 rounded-full"
                      src={review.img}
                    ></img>
                  </div>
                  <div className="p-2 mt-4">
                    <p className="leading-6">{review.reviews}</p>
                    <p className="mt-7">-{review.name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

// <div className="h-[48vh] w-[40vw] bg-blue-300  rounded-sm shadow-2xl margin-auto mt-[100px] ">
// <div className="bg-green-600 h-[40vh]">{/* <Page></Page> */}</div>
//   <div className="text-center mt-4 flex justify-center gap-6">
//   <button className="text-2xl text-violet-500 ">
//     <FaLessThan> </FaLessThan>
//   </button>
//   <button className="text-2xl text-violet-500">
//     <FaGreaterThan></FaGreaterThan>
//   </button>
// </div>
