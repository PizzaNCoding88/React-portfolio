// import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import React from "react";

const Contact = () => {
  // const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData,
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //     setResult(res.message);
  //   } else {
  //     console.log("Error", res);
  //     setResult(res.message);
  //   }
  // };
  return (
    <section
      id="contact"
      className=" sm:max-w-[70%] sm:mx-auto lg:flex lg:mt-16 lg:gap-16 lg:items-center"
    >
      <h3 className="text-center text-secondary mt-12 mb-8 font-bold text-xl md:text-2xl lg:mt-0 px-4 sm:px-0 xl:text-3xl font-SecondaryF">
        Have you got a project in mind? Let&#39;s talk
      </h3>
      <form
        action="https://formsubmit.co/umbertonardiello@gmail.com"
        method="POST"
        className="w-4/5 mx-auto rounded-lg px-8 py-4 mb-12 shadow-3xl sm:max-w-[65%] lg:max-w-[50%]"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          className=" bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary placeholder:text-secondary focus:outline-none placeholder:font-PrimaryF"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary placeholder:text-secondary focus:outline-none  placeholder:font-PrimaryF"
        />

        <label htmlFor="textarea" className="text-secondary pl-2 font-PrimaryF">
          Message
        </label>
        <TextareaAutosize
          minRows={3}
          maxRows={10}
          className="bg-transparent block border-b border-b-secondary w-full pl-2 pb-2 mb-2 text-secondary focus:outline-none"
          id="textarea"
        />
        <input
          type="submit"
          value="Send"
          className="text-secondary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
          transition-all duration-300 font-PrimaryF"
        />
      </form>
    </section>
    // <div className=" border-2 border-solid border-secondary flex">
    //   <form onSubmit={onSubmit}>
    //     <input
    //       type="text"
    //       name="name"
    //       className="block border-2 border-secondary"
    //       placeholder="Name"
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       className="block border-2 border-secondary"
    //       placeholder="Email"
    //     />
    //     <textarea
    //       name="Text"
    //       className="block border-2 border-secondary"
    //       placeholder="Text"
    //     ></textarea>
    //     <input type="submit" className="block border-2 border-secondary" />
    //   </form>
    //   <span>{result}</span>
    // </div>
  );
};

export default Contact;
