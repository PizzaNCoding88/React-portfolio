// import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const Contact = () => {
  return (
    <section
      id="contact"
      className=" sm:max-w-[70%] sm:mx-auto lg:flex lg:mt-16 lg:gap-16 lg:items-center"
    >
      <h3 className="text-center text-secondary mt-12 mb-8 font-bold text-xl md:text-2xl lg:mt-0">
        Have you got a project in mind? Let&#39;s discuss it
      </h3>
      <form
        action=""
        className="w-4/5 mx-auto rounded-lg px-8 py-4 mb-12 shadow-3xl sm:max-w-[65%] lg:max-w-[50%]"
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
          minRows={3}
          maxRows={10}
          defaultValue="Message"
          className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none"
        />
        <input
          type="submit"
          value="Send"
          className="text-secondary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
          transition-all duration-300"
        />
      </form>
    </section>
  );
};

export default Contact;
