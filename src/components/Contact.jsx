import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="bg-secondary w-4/5 h-[1px] mx-auto"></div>
      <h2 className="text-secondary font-bold text-center my-4 text-xl">
        Get In Touch
      </h2>
      <form>
        <label htmlFor="name" className="text-secondary block">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className=" bg-gray-800 border-none placeholder:text-secondary"
        ></input>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email"></input>
      </form>
    </section>
  );
};

export default Contact;
