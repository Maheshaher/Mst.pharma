function Contact() {
  return (
    <div className="pt-[80px]">
      <div className="h-[60px] p-[16px] ml-[170px]">
        <div className="flex gap-2 ">
          Home<span>/</span>
          <strong>Contact</strong>
        </div>
      </div>
      <section>
        <form action="#" method="post">
          <div>
            <div>
              <div>
                <label for="c_fname">First Name </label>
                <input type="text" id="c_fname" name="c_fname"></input>
              </div>
              <div>
                <label for="c_lname">Last Name </label>
                <input type="text" id="c_lname" name="c_lname"></input>
              </div>
            </div>
            <div>
              <div>
                <label for="c_email">Email </label>
                <input
                  type="email"
                  id="c_email"
                  name="c_email"
                  placeholder=""
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label for="c_subject">Subject </label>
                <input
                  type="text"
                  class="form-control"
                  id="c_subject"
                  name="c_subject"
                ></input>
              </div>
            </div>

            <div>
              <div>
                <label for="c_message">Message </label>
                <textarea
                  name="c_message"
                  id="c_message"
                  cols="30"
                  rows="7"
                  class="form-control"
                ></textarea>
              </div>
            </div>
            <div>
              <div>
                <input type="submit" value="Send Message"></input>
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
