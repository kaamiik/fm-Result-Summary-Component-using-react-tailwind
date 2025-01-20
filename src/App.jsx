function App() {
  return (
    <div className="flex min-h-screen flex-col font-serif md:bg-very-light-blue">
      <main className="flex flex-1 sm:items-start md:items-center md:p-4">
        <div className="bg-white text-base sm:container md:container sm:mx-auto sm:grid sm:text-lg md:mx-auto md:grid-cols-2 md:rounded-3xl">
          {/* Result */}
          <div className="flex flex-col gap-6 rounded-b-3xl bg-gradient-1 px-14 pb-10 pt-6 text-center font-bold text-light-blue drop-shadow-3xl md:gap-7 md:rounded-3xl md:pb-11 md:pt-9">
            <h1 className="text-lg sm:text-2xl">Your Result</h1>
            <div className="mx-auto grid aspect-square w-fit place-content-center rounded-full bg-gradient-2 px-10 md:mt-2 md:px-16">
              <p className="text-5xl font-extrabold text-white md:text-7xl">
                76
              </p>
              <p className="text-light-blue/50">of 100</p>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="text-2xl text-white md:text-3xl">Great</p>
              <p className="text-balance font-medium">
                You scored higher than 65% of the people who have taken these
                tests.
              </p>
            </div>
          </div>
          {/* Summary */}
          <div className="flex flex-col gap-6 rounded-e-3xl bg-white px-8 pb-8 pt-6 font-bold md:gap-7 md:px-10 md:pb-12 md:pt-10">
            <h2 className="text-lg text-dark-navy sm:text-2xl">Summary</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center justify-between rounded-[12px] bg-red/5 p-4">
                <div className="flex items-center gap-3">
                  <img src="/src/assets/images/icon-reaction.svg" alt="" />
                  <p className="text-red">Reaction</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>80</p>
                  <span className="text-dark-navy/50"> / 100</span>
                </div>
              </li>
              <li className="flex items-center justify-between rounded-[12px] bg-yellow/5 p-4">
                <div className="flex items-center gap-3">
                  <img src="/src/assets/images/icon-memory.svg" alt="" />
                  <p className="text-yellow">Memory</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>92</p>
                  <span className="text-dark-navy/50"> / 100</span>
                </div>
              </li>
              <li className="flex items-center justify-between rounded-[12px] bg-green/5 p-4">
                <div className="flex items-center gap-3">
                  <img src="/src/assets/images/icon-verbal.svg" alt="" />
                  <p className="text-green">Verbal</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>61</p>
                  <span className="text-dark-navy/50"> / 100</span>
                </div>
              </li>
              <li className="flex items-center justify-between rounded-[12px] bg-blue/5 p-4">
                <div className="flex items-center gap-3">
                  <img src="/src/assets/images/icon-visual.svg" alt="" />
                  <p className="text-blue">Visual</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>72</p>
                  <span className="text-dark-navy/50"> / 100</span>
                </div>
              </li>
            </ul>
            <button
              className="relative w-full rounded-full bg-dark-navy py-4 text-lg text-white duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-gradient-1 before:opacity-0 before:transition-opacity hover:drop-shadow-3xl hover:before:opacity-100 hover:before:drop-shadow-3xl md:mt-3"
              type="button"
            >
              <span className="relative z-10">Continue</span>
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-white text-center text-xs md:bg-very-light-blue">
        Challenge by{' '}
        <a
          className="text-red"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          className="text-red"
          href="https://www.frontendmentor.io/profile/kaamiik"
        >
          Kamran Kiani
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
