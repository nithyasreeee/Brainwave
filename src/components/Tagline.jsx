const Tagline = ({ className, children }) => {
  return (
    <div
      className={`tagline flex items-center py-1 px-3 text-2xs font-bold text-n-1 uppercase ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Tagline; 