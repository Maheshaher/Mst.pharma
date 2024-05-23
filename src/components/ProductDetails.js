import { useParams } from "react-router-dom";
import data from "../Data";
import { useContext } from "react";
import { ContextApi } from "../context/ContextApi";
import { Navigate, useNavigate } from "react-router-dom";

// function ProductDetails() {
//   console.log(data);
//   //   const value = props.value;
//   const params = useParams();
//   const pname = params.Productname;
//   // console.log(pid);
//   let pdata;
//   console.log(` before assigning ${pdata}`);

//   // for (let i = 0; i < data.length; i++) {
//   //   console.log(`Checking product ${data[i].id}`);
//   //   if (data[i].id === parseInt(pid)) {
//   //     console.log(`pdataaaaaa${data[i]}`)
//   //     pdata = data[i];
//   //     break;
//   //   }
//   // }

//   data.forEach((element) => {
//     if (element.desc === pname) {
//       // Ensure types match for comparison
//       pdata = element;
//       console.log(`Found pdata: ${pname}`);
//     } else {
//       console.log(`No product found with ID ${pname}`);
//     }
//   });

//   console.log("After assigning:", pdata);

//   return (
//     <div className="bg-yellow-200 h-[400px]">
//       <div>
//         {/* img */}
//         {/* <img src={pdata.images}></img> */}
//       </div>
//       <div>
//         {/* desc.. */}
//         <div>
//           {/* <p>{pdata.descs}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ProductDetails() {
//   const params = useParams();
//   const pid = params.Productid;

//   const pdata = data;

//   let singleProductData;

//   console.log(typeof parseInt(pid));
//   console.log("data is .......", pdata);

//   pdata.forEach((e) => {
//     // if(parseInt(pid)===e.id ) {
//     singleProductData = e;
//     console.log(e);

//     // }
//   });
//   console.log("data is .......", pdata);
// }

function ProductDetails() {
  const { Page } = useContext(ContextApi);
  const params = useParams();
  const pid = params.Productid;
  console.log("ppppppppiiiiiiidddddddd", pid);
  console.log(typeof pid);
  let pdata = data;
  console.log("pppprrrrrdddddddd", pdata);
  let singleProduct = pdata[Page].find((e) => e.id == pid);
  console.log(singleProduct);
  const navigate = useNavigate();

  function NavigateHandler() {
    navigate("/");
  }

  function NavigateStoreHandler() {
    navigate("/Store");
  }

  return (
    <div className=" h-auto pt-[80px]">
      <div className="h-[60px] p-[16  px] ml-[105px] lg:ml-[220px]">
        <div className="flex gap-2 ">
          <button onClick={NavigateHandler}>Home</button>
          <span>/</span>
          <button onClick={NavigateStoreHandler}>Store</button>
          <span>/</span>
          <p>{singleProduct.desc}</p>
          
        </div>
      </div>
      <div className="flex flex-col  lg:flex-row lg:gap-20 lg:mx-auto   lg:h-[720px] lg:w-[703px] m-2 px-12 lg:p-0  ">
        <div className="h-auto lg:w-[400px]  ">
          <img
            className="h-[400px] w-[300px] border-2 rounded-[4px] overflow-hidden shadow-xl p-4"
            src={singleProduct.images}
          ></img>
        </div>
        <div className="w-[400px] mt-2 lg:mt-0 ">
          <div>
            <p className="font- tracking-widest text-3xl">
              {singleProduct.desc}
            </p>
          </div>
          <div className="pt-5 pr-[87px] lg:pr-0  leading-7 ">
            <p>{singleProduct.descs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
