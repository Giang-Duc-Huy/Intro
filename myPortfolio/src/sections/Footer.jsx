const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container flex flex-col justify-center">
       
          <p className="text-center">
            © {new Date().getFullYear()} Giang Duc Huy. All rights reserved.
          </p>
      
      </div>
    </footer>
  );
};

export default Footer;