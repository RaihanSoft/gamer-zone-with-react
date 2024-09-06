function PlayOnline() {
  return (
    <div className="w-11/12 mx-auto mt-5 xl:mt-32 relative">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-3">
        <div>
          <img src="./Rectangle 67.png" alt="" />
        </div>

        <div className="flex flex-col mx-auto space-y-4 justify-center xl:w-1/3 ">
          <h1 className="text-3xl font-bold">
            {" "}
            <span
              className="text-[#F948B2] 
                "
            >
              Play Games Online
            </span>{" "}
            Anywhere, Anytime!
          </h1>
          <p>
            PC. dad’s phone, mom’s tablet, or your Chromebook, with Gamer you
            can play your favorite games online for free, any time, anywhere ,
            on any device.
          </p>
        </div>
      </section>

      <div className="absolute -bottom-24 left-[550px] hidden xl:flex">
        <img src="./Rectangle 78.png" alt="" />
      </div>
    </div>
  );
}

export default PlayOnline;
