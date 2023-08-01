import "./Story3D.css";

const Story3D = () => {
  return (
    <div className="story-content-3D">
      <div className="story-content-front">
        <img className="bgrimg" src={require("../img/story_bgr.png")} />
        <img className="heartimg" src={require("../img/heart.png")} />
      </div>
      <div className="story-content-back">
        <img src={require("../img/제리.jpg")} />
        <p className="name">감자</p>
        <p className="location">용산구</p>
      </div>
    </div>
  );
};

export default Story3D;
