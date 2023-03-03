import { useState, useEffect } from 'React';

function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 3800);
  }, []);

  return (
    <header>
      <h1 className={`header-h1 ${visible ? 'fade-right' : ''}`}> FRONT-END DEV </h1>
      <h2 className={`header-h2 ${visible ? 'fade-left' : ''}`}> RUBEN DUARTE </h2>
    </header>
  );
}

export default Header