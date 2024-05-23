import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { useContext } from "react";
import { ContextApi } from "../context/ContextApi";

function Store(props) {
  const { Page } = useContext(ContextApi);
  console.log("Page number is ..", Page);
  const storedata = props.storedata;
  // const [pdetails, Setpdetails] = useState([]);

  // function PdetalisHandler(a) {
  //   Setpdetails([{ ...a }]);
  // }

  const navigate = useNavigate();

  function NavigateHandler() {
    navigate("/");
  }

  return (
    <div className=" h-auto pt-[80px]">
      <div className="h-[60px] p-[16px] ml-[145px] sm:ml-[62px] md:ml-[104px] sm:pt-8 lg:ml-[220px]">
        <div className="flex gap-2 ">
          <button onClick={NavigateHandler}>Home</button>
          <span>/</span>
          <strong>Store</strong>
        </div>
      </div>

      {/* Product detalis
      {pdetails.map((x) => {
        return (
          <div className="bg-green-500 absolute z-10 mt-[25%] ml-[50%]">
            <div className="h-[250px]  w-[220px] border-2 m-auto">
              <img className="h-[100%] w-[100%] " src={x.images}></img>
            </div>
            <div>
              <h2>{x.desc}</h2>
              <div>{x.descs}</div>
            </div>
          </div>
        );
      })} */}

      {/* Productssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}

      <div className="w-[70vw] sm:w-[80vw] lg:w-[70vw]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-auto ">
        {storedata[Page].map((val) => {
          return (
            <div
              key={val.id}
              className=" h-[310px] w-[240px] block gap-2 m-auto mt-3 mb-1 rounded-sm border-2 hover:shadow-2xl "
            >
              {/* image  */}
              <Link to={`/Store/${val.id}`}>
                <div className="h-[250px]  w-[220px]  m-auto  p-4">
                  <img
                    // onClick={()=>PdetalisHandler(val)}
                    className="h-[100%] w-[100%] transform hover:scale-[1.1]  transation duration-300 "
                    src={val.images}
                  ></img>
                </div>
              </Link>

              {/* name && price */}
              <div className="">
                <h3 className="ml-4 mt-1 font-semibold">{val.desc}</h3>
                <h3 className="ml-4  font-semibold">₹ {val.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination></Pagination>
      <section className=" h-[px] relative flex flex-col gap-4 lg:gap-[100px] justify-center items-center bg-teal-500 p-6 md:flex-row lg:flex-row">
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

export default Store;
