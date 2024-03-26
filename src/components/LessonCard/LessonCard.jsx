import LessonCardStyle from "./LessonCard.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const LessonCard = ({ id, name, hour, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const clickClose = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={LessonCardStyle["lesson-box"]}>
      <span onClick={clickClose}>x</span>
      {!showDetails ? (
        <div>
          <img src={image} />
          <h2>{name}</h2>
          <p>{hour}</p>
        </div>
      ) : (
          <div className={LessonCardStyle.check}>
            <FontAwesomeIcon className={LessonCardStyle.icon} icon={faCheck} />
          </div>
      )}
    </div>
  );
};

export default LessonCard;
