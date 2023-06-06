const Presentation = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-[#222222] h-screen">
        <div className="w-4/5 mx-auto flex justify-center flex-col h-full">
          <h1 className="text-secondary text-center text-2xl font-bold">
            Building the web my way
          </h1>
          <h2 className=" text-secondary opacity-90 text-center mt-12 font-extralight">
            Umberto Nardiello
          </h2>
          <img
            src="/assets/avatar.jpeg"
            alt="avatar"
            className=" rounded-3xl mt-12"
          />
        </div>
      </section>
    </>
  );
};

export default Presentation;
