function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Danua Gordienko</p>
      <div className="footer__social">
        <a
          href="https://api.whatsapp.com/send/?phone=380988320993&text&app_absent=0"
          className="footer__icon"
        >
          <i className="bx bxl-whatsapp"></i>
        </a>
        <a href="https://t.me/Gord1yy" className="footer__icon">
          <i className="bx bxl-telegram"></i>
        </a>
        <a
          href="https://www.instagram.com/_._.gordiy._._/"
          className="footer__icon "
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
      <p className="footer__copy">&#169; Gord1y. 2022</p>
    </footer>
  );
}
export default Footer;
