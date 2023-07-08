import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

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

  const contacts = useRef(),
    comp2 = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(contacts.current, {
        autoAlpha: 1,
        duration: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: contacts.current,
          start: "top 90%",
        },
      });
    }, comp2);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={comp2}>
      <div
        className=" sm:max-w-[70%] sm:mx-auto lg:flex lg:mt-16 lg:gap-16 lg:items-center opacity-0"
        ref={contacts}
      >
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
            aria-label="name"
          >
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Name"
              required
            />
          </label>

          <label
            htmlFor="email"
            aria-label="email"
            className="text-secondary pl-2 font-PrimaryF -translate-x-8"
          >
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Email"
              required
            />
          </label>

          <label htmlFor="textarea" aria-label="textaread">
            <textarea
              id="textarea"
              name="Text"
              className="form-input mt-8"
              placeholder="Message"
            ></textarea>
          </label>
          <input
            type="submit"
            className="text-secondary bg-transparent border-2 border-secondary px-8 py-1 rounded-lg block mx-auto hover:bg-secondary hover:text-additional
          transition-all duration-300 font-PrimaryF mb-8 mt-12"
            aria-label="submit"
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
