const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-logo">
          <a href="/">PLACE.</a>
        </div>
        <div className="menu">
          <div className="menuLeft">
            <a href="/Community">Exhibitions</a>
            <div className="dropdown">
              <span>Categories</span>
              <div className="dropdown-content">
                <a href="/Categories/Design">디자인</a>
                <a href="/Categories/Experience">사진</a>
                <a href="/Categories/Installation">체험</a>
                <a href="/Categories/Photo">설치미술</a>
              </div>
            </div>
            <a href="/Community">Community</a>
            <a href="/Story">share story</a>
            <a href="/Magazine">Place magazine</a>
          </div>
          <div className="menuRight">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
