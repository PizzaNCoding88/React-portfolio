// import TextareaAutosize from "react-textarea-autosize";
import React from "react";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4359a0b1-14fd-4278-b15b-c45673a1d9dc");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
    } else {
      setResult(res.message);
    }
  };
  return (
    // <section
    //   id="contact"
    //   className=" sm:max-w-[70%] sm:mx-auto lg:flex lg:mt-16 lg:gap-16 lg:items-center"
    // >
    //   <h3 className="text-center text-secondary mt-12 mb-8 font-bold text-xl md:text-2xl lg:mt-0 px-4 sm:px-0 xl:text-3xl font-PrimaryF lg:font-SecondaryF">
    //     Have you got a project in mind? Let&#39;s talk
    //   </h3>
    //   <form
    //     action="https://formsubmit.co/umbertonardiello@gmail.com"
    //     method="POST"
    //     className="w-4/5 mx-auto rounded-lg px-8 py-4 mb-12 shadow-3xl sm:max-w-[65%] lg:max-w-[50%]"
    //   >
    //     <label
    //       htmlFor="name"
    //       className="text-secondary pl-2 font-PrimaryF relative"
    //     >
    //       <input
    //         id="name"
    //         type="text"
    //         placeholder="Name"
    //         name="name"
    //         className=" bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none placeholder:text-secondary
    //         placeholder:font-PrimaryF"
    //       />
    //     </label>
    //     <label
    //       htmlFor="email"
    //       className="text-secondary pl-2 font-PrimaryF -translate-x-8"
    //     >
    //       <input
    //         id="email"
    //         type="text"
    //         placeholder="Email"
    //         name="email"
    //         className=" bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none placeholder:text-secondary
    //         placeholder:font-PrimaryF"
    //       />
    //     </label>
    //     <TextareaAutosize
    //       minRows={3}
    //       maxRows={10}
    //       id="textarea"
    //       className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-5 text-secondary focus:outline-none placeholder:text-secondary
    //       placeholder:font-PrimaryF mt-8"
    //       placeholder="Message"
    //     />
    //     <input
    //       type="submit"
    //       value="Send"
    //       className="text-secondary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
    //       transition-all duration-300 font-PrimaryF mb-8"
    //     />
    //   </form>
    // </section>
    <section id="contact">
      <div className=" sm:max-w-[70%] sm:mx-auto lg:flex lg:mt-16 lg:gap-16 lg:items-center">
        <h3 className="text-center text-secondary mt-12 mb-8 font-bold text-xl md:text-2xl lg:mt-0 px-4 sm:px-0 xl:text-3xl font-PrimaryF lg:font-SecondaryF">
          Have you got a project in mind? Let&#39;s talk
        </h3>
        <form
          onSubmit={onSubmit}
          className="w-4/5 mx-auto rounded-lg px-8 py-4 mb-12 shadow-3xl sm:max-w-[65%] lg:max-w-[50%]"
        >
          <label
            htmlFor="name"
            className="text-secondary pl-2 font-PrimaryF relative"
          >
            <input
              type="text"
              name="name"
              className=" bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none placeholder:text-secondary
              //         placeholder:font-PrimaryF"
              placeholder="Name"
              required
            />
          </label>

          <label
            htmlFor="email"
            className="text-secondary pl-2 font-PrimaryF -translate-x-8"
          >
            <input
              type="email"
              name="email"
              className=" bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none placeholder:text-secondary
              //         placeholder:font-PrimaryF"
              placeholder="Email"
              required
            />
          </label>
          <textarea
            name="Text"
            className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-5 text-secondary focus:outline-none placeholder:text-secondary placeholder:font-PrimaryF mt-8"
            placeholder="Message"
          ></textarea>
          <input
            type="submit"
            className="text-secondary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
    //       transition-all duration-300 font-PrimaryF mb-8"
          />
          <span className=" text-secondary mx-auto text-center block">
            {result}
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
