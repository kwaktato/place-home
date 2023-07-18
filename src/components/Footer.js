const Footer = () => {
  return (
    //playstore, applestore, contact(로고)는 <a><img></a>
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-logo">place.</div>
          <p className="footer-content">로고 밑 내용</p>
          <div className="footer-store-wrapper">
            <button>playstore</button>
            <button>applestore</button>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-menu-list">
            <div className="footer-menu-title">COMPANY</div>
            <div className="footer-menu-submenu">
              <a href="/AboutUs">About us</a>
              <a href="/Contact">Contact us</a>
              <a href="/Blog">Blogs</a>
            </div>
          </div>
          <div className="footer-menu-list">
            <div className="footer-menu-title">CONTACT INFO</div>
            <div className="footer-menu-submenu">
              <p>Phone: 010-0000-0000</p>
              <p>Email: place@email.com</p>
              <p>Location: 서울시 </p>
            </div>
            <div className="footer-contact-logo">
              <button>페이스북</button>
              <button>트위터</button>
              <button>인스타</button>
              <button>카카오톡</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
