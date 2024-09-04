function Gamer() {
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src="./pngwing 4.png" alt="" />
        </div>

        <div className="text-right space-y-3">
          <h1 className="text-[#F948B2] font-bold text-4xl">We are gamer</h1>
          <p>An international digital games and entertainment company. We develop, publish and distribute multiplayer mobile games. We reach over 400 million players each month and our audience keeps growing.</p>
          <div>
            <button className="btn bg-[#F948B2] text-white rounded-full">know more</button>
          </div>
          <p>Our purpose... <br />
          “unleash the gamer in everyone”</p>
        </div>
      </section>
    </div>
  );
}

export default Gamer;
