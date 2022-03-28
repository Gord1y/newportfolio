function Header() {
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    let a1 = document.getElementById("a1");
    let a2 = document.getElementById("a2");
    let a3 = document.getElementById("a3");
    let a4 = document.getElementById("a4");
    let a5 = document.getElementById("a5");

    if (value > -1) {
      a5.classList.remove("active");
      a4.classList.remove("active");
      a3.classList.remove("active");
      a2.classList.remove("active");
      a1.classList.add("active");
    }
    if (value > 500) {
      a2.classList.add("active");
      a1.classList.remove("active");
      a3.classList.remove("active");
    }
    if (value > 1000) {
      a2.classList.remove("active");
      a4.classList.remove("active");
      a3.classList.add("active");
    }
    if (value > 1600) {
      a3.classList.remove("active");
      a5.classList.remove("active");
      a4.classList.add("active");
    }
    if (value > 2400) {
      a4.classList.remove("active");
      a5.classList.add("active");
    } else {
      a5.classList.remove("active");
    }
  });

  let ready = false;
  function handleClick() {
    if (ready === true) {
      document.querySelector(".nav__menu").style.right = "0%";
      ready = !ready;
    } else {
      document.querySelector(".nav__menu").style.right = "-100%";
      ready = !ready;
    }
  }
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="/" className="nav__logo">
            Gord1y
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list" onClick={handleClick}>
            <li className="nav__item">
              <a href="#home" className="nav__link active" id="a1">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" id="a2">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link" id="a3">
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link" id="a4">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" id="a5">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
}
export default Header;
