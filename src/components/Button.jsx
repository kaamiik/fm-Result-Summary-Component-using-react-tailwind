function Button({ children }) {
  return (
    <button
      className="relative w-full rounded-full bg-dark-navy py-4 text-lg text-white outline-2 duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-gradient-1 before:opacity-0 before:transition-opacity hover:drop-shadow-3xl hover:before:opacity-100 hover:before:drop-shadow-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red md:mt-3"
      type="button"
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

export default Button;
