import React from "react";

function Career() {
  return (
    <div className="mt-24 bg-[#FF42A5]">
      <section className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-11/12 mx-auto  text-white">
        {/* first div  */}
        <div className="space-y-5 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">Careers</h1>
          <p>
            Gamer is driven to create the best and most fun games for our
            millions of players all around the world, and we,re always on the
            lookout for more top talent to join our growing team. If you,d like
            to help us make great games and be a part of Gamers bright future,
            we,d love to hear from you.
          </p>

          <div className="flex justify-between">
            <div className="text-bold">
              Multimedia Artist + <br />
              Data Engineer + <br />
              Adroid Engineer + <br />
              Server Developer + <br />
              Group Financial Accountant + <br />
              Senior User Acuisition Specialist + <br />
            </div>

            <div className="text-bold">
              Lisbon, Portugal <br />
              Lisbon, Portugal <br />
              Zoetermeer, Netherlands <br />
              Lisbon, Portugal <br />
              London, United Kingdom <br />
              Lisbon, Portugal <br />
            </div>
          </div>
        </div>

        {/* second div  */}
        <div>
          <img src="./Group 65.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Career;
