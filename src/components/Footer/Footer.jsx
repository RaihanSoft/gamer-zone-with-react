import React from "react";

function Footer() {
  return (
    <div className="bg-[#0B0223] text-white px-3">
      <section>
        <div className="text-center py-14 space-y-5">

          <div className="flex  items-center justify-center gap-2">
            <div>
              <img src="./Frame.png" alt="" />
            </div>
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-[#FF42A5]">G</span>amer
            </h1>
          </div>

        </div>

        <div className="space-x-4">
            <a href="#">Our Story</a>
            <a href="#">Gamers</a>
            <a href="#">Web Games</a>
            <a href="#">Careers</a>
            <a href="#">Support</a>
            <a href="#">My Account</a>
        </div>


        <div className="space-x-4 text-2xl">
        <i class="ri-facebook-fill"></i>
        <i class="ri-twitter-x-fill"></i>
        <i class="ri-instagram-line"></i>
        <i class="ri-github-fill"></i>
        </div>

        <div className="flex gap-5 justify-center ">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Privacy Settings</p>
        </div>

        <div>
            <p>Play Games @ Gamer @ 2000-2023 Gamer Bangladesh</p>
        </div>


        </div>
      </section>
    </div>
  );
}

export default Footer;
