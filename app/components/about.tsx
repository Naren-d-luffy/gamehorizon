export default function About() {
  return (
    <>
      <div className="w-auto  m-10  space-y-10 ">
        <div
          className="bg-black bg-opacity-30 rounded-lg "
          style={{ backgroundImage: `url(/assets/siteBgs/22.jpg)` }}
        >
          <h1 className="text-6xl font-medium text-blue-950 font-head p-10 text-center">
            About Game Horizon
          </h1>
        </div>

        <div
          className="bg-black bg-opacity-30 rounded-lg h-fit p-10 w-full flex flex-col items-center"
          style={{ backgroundImage: `url(/assets/siteBgs/22.jpg)` }}
        >
          <div className=" pb-5 w-10/12 ">
            <div className="w-full space-y-5">
              <h2 className="text-3xl text-blue-950 font-serif">
                Welcome to Game Horizon - your personal <br /> journey through
                the world of gaming!
              </h2>
            </div>
          </div>
          <div className="w-10/12 pb-5">
            <p className="text-xl font-medium font-roboto text-justify text-gray-800 w-3/4">
              At Game Horizon, we're all about capturing your unique gaming
              experiences. Whether you're reflecting on the games you've
              completed, exploring those you're currently immersed in, or
              dreaming about the ones you'll play next, this is your space to
              organize and celebrate your love for gaming.
            </p>
          </div>
        </div>

        <div
          className="bg-black bg-opacity-30 rounded-lg h-fit w-full flex justify-center p-10"
          style={{ backgroundImage: `url(/assets/siteBgs/23.jpg)` }}
        >
          <div className="w-10/12">
            <h2 className="text-3xl font-medium text-blue-950 font-serif pb-3">
              Why Game Horizon?
            </h2>
            <p className="text-lg font-medium text-gray-800 pb-3 font-roboto text-justify">
              We believe every gamer has a story to tell. From epic quests and
              strategy-driven battles to casual adventures, each game leaves a
              mark. Game Horizon is here to help you document that journey,
              providing a platform where you can:
            </p>
            <ul className="list-disc list-inside text-gray-800 space-y-2 font-roboto">
              <li>
                Track Your Played Games: Keep a record of the games you've
                conquered and the memories you've made.
              </li>
              <li>
                Manage Your Current Games: Stay on top of the games you're
                currently playing, from progress tracking to completion goals.
              </li>
              <li>
                Curate Your Wishlist: Plan your future gaming adventures by
                listing the titles you're excited to dive into.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
