const Anchor = ({ href, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-gray-700 text-gray-50 py-3 px-8 rounded-xl hover:bg-cyan-500 hover:text-cyan-50 ease-in-out duration-300"
    >
      {text}
    </a>
  );
};

export default Anchor;
