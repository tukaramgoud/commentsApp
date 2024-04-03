// Write your code here
import './index.css'

const CommentItem = props => {
  const {itemDetails} = props
  return (
    <div className="item-container">
      <div className="comments-container">
        <div className="person-comment-container">
          <p className="round-name">s</p>
          <div className="description-container">
            <div className="name-container">
              <h1 className="person-name">Ravi Kiran Rathod</h1>
              <p className="time-styling">2 minutes ago</p>
            </div>
            <p className="description-para">
              some random text that is shown on the display of the web
            </p>
          </div>
        </div>
      </div>
      <div className="like-dislike-container">
        <div className="like-container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="disLike"
              className="image-sizing"
            />
            <button type="button" className="button">
              Like
            </button>
          </div>
        </div>
        <button type="button" className="button-new">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="image-sizing"
          />
        </button>
      </div>
      <hr className="line" />
    </div>
  )
}

export default CommentItem
