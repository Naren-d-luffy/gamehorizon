
export default function Contact() {


  return (
    <div className="w-8/12 mx-auto bg-white shadow-md rounded m-8 p-8" style={{ backgroundImage: `url(/assets/siteBgs/22.jpg)` }}>
      <h2 className="font-head font-medium text-5xl text-blue-950 mb-6 text-center">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label className="font-serif text-xl text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full p-2 rounded bg-black bg-opacity-20"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-serif text-xl text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 rounded bg-black bg-opacity-20"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-serif text-xl text-gray-700 font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="w-full p-2 rounded bg-black bg-opacity-20"
            required
          />
        </div>

        <div className="mb-4">
          <label className="font-serif text-xl text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-2 rounded bg-black bg-opacity-20"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-950 text-white p-2 rounded font-bold"
        >
          Send
        </button>
      </form>
    </div>
  );
}
