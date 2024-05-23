function Footer() {
  return (
    <div className="bg-teal-50 h-[550px] p-4 ">
      <footer className=" flex justify-evenly flex-col  md:flex-row md:gap-9 md:p-[60px] lg:flex-row lg:p-[100px]">
        <div className="mb-5">
          <div>
            <h3 className="mb-2 mt-6"><strong>About Us</strong></h3>
            <p className="w-[300px] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-2"><strong>Quick Links</strong></h3>
          <ul>
            <li>Supplements</li>
            <li>Vitamins</li>
            <li>Diet &amp; Nutrition</li>
            <li>Tea &amp; Coffee</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-9">Contact Info</h3>

          <ul>
            <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li>
              <a href="tel://23923929210">+2 392 3929 210</a>
            </li>
            <li>emailaddress@domain.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
