import {Component} from 'react'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  render() {
    console.log(initialContainerBackgroundClassNames)
    return (
      <div className="background-container">
        <h1 className="comments-heading">Comments</h1>
        <div className="userInput-image-container">
          <form className="user-input-container">
            <label htmlFor="note" className="para">
              say something about our 4.0 Technologies
            </label>
            <input
              type="search"
              className="user-input"
              placeholder="Your Name"
              id="note"
            />
            <textarea
              rows="10"
              cols="52"
              className="text-area-input"
              placeholder="Your Comment"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="line" />
        <div className="comments-container">
          <div className="count-of-comments">
            <p className="count-para">0</p>
            <p className="count-comment-para">Comments</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
