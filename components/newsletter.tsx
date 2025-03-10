export default function Newsletter() {
  return (
    <div className="relative text-center px-4 py-6 group">
      <div
        className="absolute inset-0 rounded-xl bg-orange-200 border border-gray-200 -rotate-1 group-hover:rotate-0 transition duration-150 ease-in-out -z-10"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundBlendMode: "overlay",
          opacity: 0.4,
        }}
      />
      <div className="font-nycd text-2xl text-orange-500 mb-1">
        We know everyone in Greece
      </div>
      <div className="text-2xl font-bold mb-5">
        Share your email and we'll get back to you.
      </div>
      <form className="inline-flex max-w-sm">
        <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
          <input
            type="email"
            className="form-input py-1.5 w-full mb-2 sm:mb-0 sm:mr-2"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button
            className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 shadow-sm whitespace-nowrap"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
