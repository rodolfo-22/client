import "../Components/FooterComponents/Footer.css";

const Footer = () => {

  return (

    <footer>
      <div className="footer-container" >
        <div className="left-col">
          <h3>Manténgase en contacto con nosotros</h3>
          <div className="social-media">
            <a href="https://www.facebook.com/UCA.ElSalvador/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/UCA_ES"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/uca_elsalvador/"><i className="fab fa-instagram"></i></a>
          </div>
          <p className="rights-text">© 2022 Created By <b>Círculos de Estudio UCA</b>  All Rights Reserved.</p>
        </div>

        <div className="right-col">
          <h1>Centro de servico social UCA</h1>
          <div className="border"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;






























/* //https://fantacydesigns.com/footer-design-in-html */