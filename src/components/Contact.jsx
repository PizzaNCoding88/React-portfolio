// import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const Contact = () => {
  return (
    <section id="contact">
      <form
        action=""
        className="w-4/5 mx-auto rounded-lg px-8 py-4 my-12 shadow-3xl "
      >
        <input
          type="text"
          placeholder="Name"
          className=" bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary placeholder:text-secondary focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary placeholder:text-secondary focus:outline-none"
        />
        <TextareaAutosize
          minRows={1}
          maxRows={10}
          defaultValue="Message"
          className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none"
        />
        <input
          type="submit"
          value="Send"
          className="text-secondary bg-additional px-8 py-1 rounded-lg block mx-auto"
        />
      </form>
    </section>
  );
};

export default Contact;
