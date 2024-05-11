import { NavLink } from "react-router-dom";
import Testimonial from "./Testimonial";

function MainContainer(props) {
  const bestsell = props.bestsell;
  return (
    <div className="pt-[80px]">
      {/* Section 1 */}
      <section className=" h-[700px] w-auto  relative">
        <img
          className="max-h-[100%] w-[100%] object-fill opacity-80"
          src="/images/pexels-n-voitkevich-7615562.jpg"
          loading="lazy"
        ></img>
        <div className=" h-[300px] w-[550px] absolute left-[500px] top-[150px] z-10 p-2 ">
          <p className="text-black font-bold text-[60px] text-center drop-shadow-2xl  opacity-[77%] decoration-sky-950  ">
            WELCOME TO MST PHARMA
          </p>
        </div>
      </section>
      {/* Section 2 */}
      <section className=" h-[220px] flex justify-evenly">
        <div className="bg-blue-200 h-[190px] w-[270px] relative bottom-12 rounded-sm p-[30px] "></div>
        <div className="bg-black h-[180px] w-[280px] relative bottom-12 rounded-sm"></div>
        <div className="bg-black h-[180px] w-[280px] relative bottom-12 rounded-sm"></div>
      </section>
      {/* Section 3 */}
      <section className=" h-[850px] ">
        <h2 className="text-center p-8 font-semibold text-xl tracking-widest">
          POPULAR PRODUCTS
        </h2>
        <div className=" w-[80vw] h-[600px]  m-auto grid  grid-cols-4  ">
          {bestsell.map((val) => {
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
          {/* <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div>
          <div className="bg-black h-[180px] w-[280px]  rounded-sm"></div> */}
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

      <section className=" h-[400px] relative flex gap-24 justify-center items-center bg-teal-500  ">
        <div className="w-[440px] h-[300px] shadow-2xl rounded-sm overflow-hidden transation duration-300 hover:scale-[1.1] transform">
          <img
            src="/images/flipedbluewhite.png"
            className="max-w-[100%] h-[100%] loading-lazy blur-[1.5px] object-fill  "
          ></img>
          {/* <div className="max-w-[100%] h-[100%] bg-teal-500 rounded-sm  ">

          </div> */}
          <div className=" z-10 absolute top-6 w-[200px] p-7 ml-2">
            <h2 className="text-3xl font-bold tracking-wide ">
              MST PHARMA Products
            </h2>
            <p className="mt-3 leading-7">
              Good Medicine for Good Health. Be Healthy
            </p>
          </div>
        </div>

        <div className="w-[440px] h-[300px] shadow-2xl rounded-sm overflow-hidden transation duration-300 hover:scale-[1.1] transform">
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
