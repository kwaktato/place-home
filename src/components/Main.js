const Main = () => {
  return (
    <main>
      <div className="main">
        <section className="section-wrapper-banner">
          <picture>banner</picture>
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
            <button>
              <img src={require("../img/bx_bxs-map-pin.png")} />
              Show On Map
            </button>
          </div>
          <div className="story-content-wrapper">
            <picture>사진</picture>
            <p>
              user name
              <br />
              전시회 이름 혹은 위치
            </p>
          </div>
        </section>
        <section className="section-wrapper-story section-wrapper-close">
          <div className="story-title-wrapper">
            <h1>
              근처 인기있는 전시회
              <br />
              스토리 몰아보기
            </h1>
            <button>
              <img
                src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2Fad%2F33%2F15ad338a4795af73ba09c3949a819526.jpg&type=sc960_832"
                alt="alt"
              />
              Show On Map
            </button>
          </div>
          <div className="story-content-wrapper">
            <picture>사진</picture>
            <p>
              user name
              <br />
              전시회 이름 혹은 위치
            </p>
          </div>
        </section>
        <section className="section-wrapper-story section-wrapper-current">
          <div className="story-title-wrapper">
            <h1>
              현재 가장 인기있는 전시회
              <br />
              스토리 몰아보기
            </h1>
            <button>
              <img
                src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2Fad%2F33%2F15ad338a4795af73ba09c3949a819526.jpg&type=sc960_832"
                alt="alt"
              />
              Show On Map
            </button>
          </div>
          <div className="story-content-wrapper">
            <picture>사진</picture>
            <p>
              user name
              <br />
              전시회 이름 혹은 위치
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
