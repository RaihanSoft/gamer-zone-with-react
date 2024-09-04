import React from "react";

function Online() {
  return (
    <div className="w-11/12 mx-auto">
      <section>
        {/* titel  */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Online Games <span className="text-[#F948B2]">Funny Videos</span>
          </h1>
          <p>A Collection of Hilarious Videos to Brighten Your Day</p>
        </div>

        {/* boxes   */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 justify-items-center lg:grid-cols-4 mt-10">

          {/* box one  */}
          <div className=" space-y-2 rounded-2xl">
            <div className="relative">
              <img src="./Rectangle 4.png" alt="" />
              <i class="ri-play-circle-fill text-6xl absolute top-48 left-32"></i>
            </div>
            <p  >No Download. No Installs. Play  on Gamer.</p>
          </div>

          {/* box two  */}
          <div className=" space-y-2 rounded-2xl">
            <div>
              <img src="./Rectangle 5.png" alt="" />
            </div>
            <p>No Download. No Installs. Play   on Gamer.</p>
          </div>


          {/* box two  */}
          <div className=" space-y-2 rounded-2xl">
            <div>
              <img src="./Rectangle 6.png" alt="" />
            </div>
            <p>No Download. No Installs. Play on Gamer.</p>
          </div>


          {/* box two  */}
          <div className=" space-y-2 rounded-2xl">
            <div>
              <img src="./Rectangle 7.png" alt="" />
            </div>
            <p>No Download. No Installs. Play  on Gamer.</p>
          </div>



        </div>


      </section>
    </div>
  );
}

export default Online;
