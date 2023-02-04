const Anchor = ({ href, children, setModalMenu }) => {
  const handleClick = e => {
    // PREVENT DEFAULT BEHAVIOUR
    e.preventDefault();
    // SELECT TARGET ELEMENT ON THE PAGE TO SCROLL TO
    const target = document.querySelector(href);
    // SCROLL SMOOTHLY TO THE TARGET ELEMENT USING SCROLLINTOVIEW METHOD
    target.scrollIntoView({ behavior: "smooth" });
    // CLOSE MENU AFTER 2MS
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
