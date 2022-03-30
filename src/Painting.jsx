import paintingImage from "./painting.svg";
import "./painting-list.css";

function Painting({title, author, year, location}) {
  

  return (
    <div className="painting" >
      <img src={paintingImage} className="painting-image" />
      <div className="info">
        <h3 className="text-header">{title}</h3>
        <div className="text">
          Author: <span>{author}</span>
        </div>
        <div className="text">
          Created: <span>{year}</span>
        </div>
        <div className="text">
          Location: <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

export default Painting;
