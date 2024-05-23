import { RiTruckFill } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
function About() {
  return (
    <div>
      <section className=" pt-[80px] h-[730px]">
        <img
          className="h-[100%] lg:w-[100%] lg:object-fill opacity- m-auto  "
          src="/images/hero_1.jpg"
          loading="lazy"
        ></img>
        <div className="flex flex-col items-center mt-[170px] absolute left-[10px] top-[100px] lg:top-[100px] sm:left-[130px] md:left-[320px] lg:left-[450px] z-10 p-1 text-white  ">
          <h1 className="text-[50px] font-bold lg:tracking-[5px]">ABOUT US</h1>
          <p className="w-[390px] lg:w-[590px] text-[20px] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            obcaecati natus iure voluptatum eveniet harum recusandae ducimus
            saepe.
          </p>
        </div>
      </section>
      <section className=" relative flex flex-col  md:flex-col gap-16 justify-center items-center bg-teal-500 p-6 ">
        <div className="lg:flex  md:flex md:gap-9 md:flex-row lg:flex-row lg:gap-72">
          <div className=" w-[380px]   lg:w-[440px] h-[300px] shadow-2xl rounded-sm overflow-hidden transation duration-300 hover:scale-[1.1] transform">
            <div className="max-w-[100%] h-[100%] bg-teal-500 rounded-sm  "></div>
          </div>
          <div>
            <h1 className="text-[30px] mt-3">How we Started</h1>
            <p className="w-[390px] text-[15px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
              architecto cumque, deleniti commodi molestias repellendus quos
              sequi hic fugiat asperiores illum. Atque, in, fuga excepturi
              corrupti error corporis aliquam unde nostrum quas.
            </p>
            <p className="mt-2 w-[390px]">
              Accusantium dolor ratione maiores est deleniti nihil? Dignissimos
              est, sunt nulla illum autem in, quibusdam cumque recusandae,
              laudantium minima repellendus.
            </p>
          </div>
        </div>
        <div className="lg:flex  lg:gap-72  lg:flex-row-reverse md:flex md:flex-row-reverse md:gap-9 ">
          <div className=" w-[380px] lg:w-[440px] h-[300px] shadow-2xl rounded-sm  transation duration-300 hover:scale-[1.1] transform">
            <div className="max-w-[100%] h-[100%] bg-teal-500 rounded-sm  "></div>
          </div>
          <div className="p-2">
            <h1 className="text-[30px] mt-3 ">WE Are Trusted Company</h1>
            <p className="w-[390px] text-[15px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              repellat, dicta at laboriosam, nemo exercitationem itaque eveniet
              architecto cumque, deleniti commodi molestias repellendus quos
              sequi hic fugiat asperiores illum. Atque, in, fuga excepturi
              corrupti error corporis aliquam unde nostrum quas.
            </p>
            <p className="mt-2 w-[390px]    ">
              Accusantium dolor ratione maiores est deleniti nihil? Dignissimos
              est, sunt nulla illum autem in, quibusdam cumque recusandae,
              laudantium minima repellendus.
            </p>
          </div>
        </div>
      </section>

      <section className="p-[30px]  md:flex lg:flex lg:gap-4">
        <div className="mt-3 p-2 lg:p-6">
          <div className="">
            <RiTruckFill className="h-[50px] w-[50px]" />
          </div>
          <h2 className="font-semibold">Free Shipping</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
        </div>
        <div className="mt-3 p-2 lg:p-6">
          <div className="h-[50px] w-[50px]">
            <MdRefresh className="h-[50px] w-[50px]" />
          </div>
          <h2 className="font-semibold">Free Returns</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
        </div>
        <div className="mt-3 p-2 lg:p-6">
          <div className=" ">
            <IoIosHelpCircle className="h-[50px] w-[50px]" />
          </div>
          <h2 className="font-semibold">Customer Support</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            at iaculis quam. Integer accumsan tincidunt fringilla.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
