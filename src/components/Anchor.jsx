const Anchor = ({ href, children, setModalMenu }) => {
  const handleClick = e => {
    e.preventDefault();
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: "smooth" });
    
    setTimeout(() => {
      setModalMenu(false);
    }, 200);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Anchor;
