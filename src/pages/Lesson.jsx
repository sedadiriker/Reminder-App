import LessonCard from "../components/LessonCard/LessonCard"
import "../SCSS/_lesson.scss"
import { useState } from "react"


const Lesson = ({data}) => {
  const [cards, setCards] = useState(data)

  const clearCards= () => {
    setCards([])
  }
  const undoClear = () => {
    setCards(data)
  }
  return (
    <div className="lesson">
      <div className="card-container">
      {
        cards.map((lesson) => (
          <LessonCard key={lesson.id} {...lesson}/>
        ))
      }
    </div>
      <div className="btns">
      <button className="red" onClick={clearCards}>Clear</button>
      <button className="green" onClick={undoClear}>Undo</button>
      </div>
    </div>

  )
}

export default Lesson
