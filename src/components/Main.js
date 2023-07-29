const Main = () => {
  return (
    <main>
      <div className="main">
        <section className="section-wrapper-banner">
          <div className="inner-wrapper">
            <div className="inner-wrapper-title">
              <h1>VISIT YOUR EXHIBIT</h1>
            </div>
            <div className="inner-wrapper-content">
              <div className="inner-wrapper-content-wrapper">
                <p className="location">Location</p>
                <p className="setting">선호하는 도시 설정</p>
              </div>
              <img src={require("../img/search.jpg")} />
            </div>
          </div>
        </section>
        <section className="section-wrapper-story section-wrapper-recent">
          <div className="story-title-wrapper">
            <h1>
              유저들의 최근 전시회
              <br />
              스토리 모아보기
            </h1>
            <div className="story-title-wrapper-map">
              <img src={require("../img/map_btn.png")} />
            </div>
          </div>
          <div className="story-content">
            <div className="story-content-wrapper">
              <div className="story-content-heart">
                <img src={require("../img/heart.png")} />
              </div>
              <div className="story-content-account">
                <img src={require("../img/제리.jpg")} />
                <p className="name">감자</p>
                <p className="location">용산구</p>
              </div>
            </div>
            <div className="story-content-wrapper">
              <div className="story-content-heart">
                <img src={require("../img/heart.png")} />
              </div>
              <div className="story-content-account">
                <img src={require("../img/제리.jpg")} />
                <p className="name">감자</p>
                <p className="location">용산구</p>
              </div>
            </div>
            <div className="story-content-wrapper">
              <div className="story-content-heart">
                <img src={require("../img/heart.png")} />
              </div>
              <div className="story-content-account">
                <img src={require("../img/제리.jpg")} />
                <p className="name">감자</p>
                <p className="location">용산구</p>
              </div>
            </div>
            <div className="story-content-wrapper">
              <div className="story-content-heart">
                <img src={require("../img/heart.png")} />
              </div>
              <div className="story-content-account">
                <img src={require("../img/제리.jpg")} />
                <p className="name">감자</p>
                <p className="location">용산구</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
