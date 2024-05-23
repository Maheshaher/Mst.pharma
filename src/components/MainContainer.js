import { NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";

function MainContainer(props) {
  const bestsell = props.bestsell;
  return (
    <div className="mt-[80px]">
      {/* Section 1 */}
      <section className=" h-[700px]   ">
        <img
          className="h-[100%] w-[100%] object-fill opacity-80 m-auto  "
          src="/images/pexels-n-voitkevich-7615562.jpg"
          loading="lazy"
        ></img>
        <div className=" h-[300px] lg:w-[400px] absolute left-[10px] top-[300px] lg:top-[250px] lg:left-[550px] md:left-[100px] z-10 p-1 ">
          <p className="text-black font-bold text-[60px] text-center drop-shadow-2xl  opacity-[77%]   ">
            WELCOME TO MST PHARMA
          </p>
        </div>
      </section>
      {/* Section 2 */}
      <section className=" h-[px] flex justify-center items-center flex-col absolute left-[65px] sm:left-[122px] top-[700px] gap-4 lg:flex-row lg:gap-9 lg:ml-[110px] md:flex-row">
        <div className="bg-sky-300 h-[100px]  w-[300px]  md:w-[270px] lg:mt-6 text-center pt-9 text-2xl font-semibold text-white rounded shadow-lg sm:w-[400px] lg:w-[350px] "> High Quality Products</div>
        <div className="bg-teal-400 h-[100px] w-[300px]  md:w-[270px] lg:mt-6 text-center pt-9 text-2xl font-semibold text-white rounded shadow-lg sm:w-[400px] lg:w-[350px]"> Economical Market price</div>
        <div className="bg-amber-300 h-[100px] w-[300px] md:w-[270px] lg:mt-6  text-center pt-9 text-2xl font-semibold text-white rounded shadow-lg sm:w-[400px] lg:w-[350px] text"> Experienced People</div>
      </section>
      {/* Section 3 */}
      <section className=" h-auto mt-[300px] lg:mt-[50px] md:mt-[40px] ">
        <h2 className="text-center p-8 font-semibold text-xl tracking-widest">
          POPULAR PRODUCTS
        </h2>
        <div className=" w-[80vw] h-auto  m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 ">
          {bestsell[0].map((val) => {
            if (val.mostsell == true) {
              return (
                <div className=" h-auto w-[240px] block gap-1 m-auto mt-3 mb-1  border-2 rounded-sm hover:shadow-2xl overflow-hidden">
                  {/* image  */}
                  <div className="h-[220px]  w-[240px]  m-auto p-2">
                    <img className="h-[100%] w-[100%] " src={val.images}></img>
                  </div>

                  {/* name && price */}
                  <h3 className="ml-4 mt-1 font-semibold">{val.desc}</h3>
                  <h3 className="ml-4  font-semibold">₹ {val.price}</h3>
                </div>
              );
            }
          })}
          {/* <div className="bg-black h-[190px] w-[350px] mt-6  rounded-sm"></div>
          <div className="bg-black h-[190px] w-[350px] mt-6  rounded-sm"></div>
          <div className="bg-black h-[190px] w-[350px] mt-6  rounded-sm"></div>
          <div className="bg-black h-[190px] w-[350px] mt-6  rounded-sm"></div>
          <div className="bg-black h-[190px] w-[350px] mt-6  rounded-sm"></div>
          <div className="bg-black h-[190px] w-[350px] mt-6  rounded-sm"></div> */}
        </div>
        <div className="text-center m-2">
          <button className="bg-blue-500 rounded-sm p-3 border-none m-9">
            <NavLink to="/Store"> VIEW ALL PRODUCTS</NavLink>
          </button>
        </div>
      </section>
      {/* Section 4 */}
      <Testimonial></Testimonial>
      {/* Section 5 */}

      <section className=" h-[px] relative flex flex-col md:flex-row md:gap-8 lg:gap-[100px] justify-center items-center bg-teal-500 p-6  lg:flex-row">
        <div className="w-[380px] lg:w-[440px] h-[300px] shadow-2xl rounded-sm overflow-hidden transation duration-300 hover:scale-[1.1] transform">
          <img
            src="/images/flipedbluewhite.png"
            className="max-w-[100%] h-[100%] loading-lazy blur-[1.5px] object-fill  "
          ></img>
          {/* <div className="max-w-[100%] h-[100%] bg-teal-500 rounded-sm  ">

          </div> */}
          <div className=" z-10 absolute top-6 w-[400px] p-7 ml-2">
            <h2 className="text-3xl font-bold tracking-wide ">
              MST PHARMA Products
            </h2>
            <p className="mt-3 leading-7 w-[250px]">
              Good Medicine for Good Health. Be Healthy
            </p>
          </div>
        </div>

        <div className=" w-[380px] lg:w-[440px] h-[300px] shadow-2xl rounded-sm overflow-hidden transation duration-300 hover:scale-[1.1] transform">
          {/* <img
            src="/images/whiteblue.jpg"
            className="max-w-[100%] h-[100%] loading-lazy "
          ></img> */}
          <div className="max-w-[100%] h-[100%] bg-teal-500 rounded-sm  "></div>
        </div>
      </section>
    </div>
  );
}

export default MainContainer;
