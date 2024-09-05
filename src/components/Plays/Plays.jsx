function Plays() {
  return (
    <div className="w-11/12 mx-auto mt-10 relative">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3">
        <div className=" space-y-5 md:pt-32  text-center xl:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold"> <span className="text-[#F948B2]">Play Instantly,</span> No Downloads  No Installs.</h2>
          <p className="">Play games online for free without downloading. Just click the Play button and play instantly in your browser.</p>
        </div>

        <div>
          <img src="./Rectangle 55.png" alt="" />
        </div>
      </section>


      <div className="absolute -bottom-16 right-[550px] hidden xl:flex">
       <img src="./Rectangle 66.png" alt="" />
      </div>
    </div>
  );
}

export default Plays;
