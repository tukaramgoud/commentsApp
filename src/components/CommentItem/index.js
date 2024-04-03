// Write your code here
import './index.css'

const CommentItem = props => {
  const {itemDetails, likedButton, deleteButton} = props
  const {name, comment, color, id, liked, duration} = itemDetails

  const buttonClicked = () => {
    likedButton(id)
  }

  const deleteButtonClicked = () => {
    deleteButton(id)
  }

  const likedImage = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="item-container">
      <div className="comments-container">
        <div className="person-comment-container">
          <p className={`round-name ${color}`}>{name[0].toUpperCase()}</p>
          <div className="description-container">
            <div className="name-container">
              <h1 className="person-name">{name}</h1>
              <p className="time-styling">{duration}</p>
            </div>
            <p className="description-para">{comment}</p>
          </div>
        </div>
      </div>
      <div className="like-dislike-container">
        <div className="like-container">
          <div>
            <img src={likedImage} alt="disLike" className="image-sizing" />
            <button type="button" className="button" onClick={buttonClicked}>
              Like
            </button>
          </div>
        </div>
        <button
          type="button"
          className="button-new"
          onClick={deleteButtonClicked}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="image-sizing"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
