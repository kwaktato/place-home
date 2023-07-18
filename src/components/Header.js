const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <div>PLACE.</div>
        </div>
        <div className="menu">
          <div className="menuLeft">
            <div className="dropdown">
              <span>Categories</span>
              <div className="dropdown-content">
                <a href="/Categories/Design">디자인 전시</a>
                <a href="/Categories/Experience">체험형 전시</a>
                <a href="/Categories/Installation">설치 미술 전시</a>
                <a href="/Categories/Photo">포토 전시</a>
                <a href="/Categories/Painting">동양화/서양화</a>
              </div>
            </div>
            <a href="/Community">Community</a>
            <a href="/Story">share story</a>
            <a href="/Magazine">Place magazine</a>
          </div>
          <div className="menuRight">
            <button className="HowtoUse-button">How to use?</button>
            <div className="dropdown">
              <button className="dropbtn">계정</button>
              <div className="dropdown-content">
                <a href="/Account">Account</a>
                <a>Help Center</a>
                <a>Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
