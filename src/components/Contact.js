import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  function NavigateHandler() {
    navigate("/");
  }

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  function onChangeHandler(event) {
    setformData((a) => {
      return {
        ...a,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
  }

  // useEffect(() => {
  //
  // }, []);
  return (
    <div className="pt-[80px]">
      <div className="h-[60px] p-[16px] lg:ml-[250px]   sm:ml-[40px] ml-[130px] sm:pt-8">
        <div onClick={NavigateHandler} className="flex gap-2 ">
          <button>Home</button> <span>/</span>
          <strong>Contact</strong>
        </div>
      </div>
      <section>
        <form
          onSubmit={submitHandler}
          className="m-3 lg:w-[70%] lg:m-auto"
          method="post"
        >
          <div className=" border-[1px] border-inherit shadow-xl lg:mt-3 border-black p-5 w-[380px] md:w-[1000px] sm:w-[550px] mx-auto ">
            <div>
              <div className="">
                <label htmlFor="c_fname">First Name </label>
                <br></br>
                <input
                  onChange={onChangeHandler}
                  className="border border-black w-[330px] border-inherit p-2 lg:w-[99%] md:w-[99%]  sm:w-[500px]"
                  type="text"
                  id="c_fname"
                  name="firstName"
                  value={formData.firstName}
                ></input>
              </div>
              <div>
                <label htmlFor="c_lname">Last Name </label>
                <br></br>
                <input
                  onChange={onChangeHandler}
                  className="border border-black w-[330px] border-inherit p-2 lg:w-[99%] md:w-[99%] sm:w-[500px]"
                  type="text"
                  id="c_lname"
                  name="lastName"
                  value={formData.lastName}
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="c_email">Email </label>
                <br></br>
                <input
                  onChange={onChangeHandler}
                  value={formData.email}
                  type="email"
                  id="c_email"
                  name="email"
                  placeholder=""
                  className="border border-black w-[330px] border-inherit p-2 lg:w-[99%] md:w-[99%] sm:w-[500px]"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="c_subject">Subject </label>
                <br></br>
                <input
                  onChange={onChangeHandler}
                  value={formData.subject}
                  type="text"
                  id="c_subject"
                  name="subject"
                  className="border border-black w-[330px] border-inherit p-2 lg:w-[99%] md:w-[99%] sm:w-[500px]"
                ></input>
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="c_message">Message </label>
                <br></br>
                <textarea
                  onChange={onChangeHandler}
                  name="message"
                  value={formData.message}
                  id="c_message"
                  cols="30"
                  rows="7"
                  className="border border-black w-[330px] border-inherit p-2 lg:w-[99%] md:w-[99%] sm:w-[500px] "
                ></textarea>
              </div>
            </div>
            <div>
              <div className="text-center mt-4 border border-black w-[330px] border-inherit p-2 lg:w-[99%] md:w-[99%] sm:w-[500px]  bg-teal-500">
                <input type="submit" value="Send Message"></input>

                {/* {/* <button>Send Message</button> */}
              </div>
            </div>
          </div>
        </form>
      </section>
      <section></section>
      <div className="bg-blue-300 h-[300px] w"></div>
    </div>
  );
}

export default Contact;
