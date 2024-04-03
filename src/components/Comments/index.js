import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'
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
  state = {name: '', comment: '', commentObject: []}

  saveComment = event => {
    event.preventDefault()
    const {name, comment, commentObject} = this.state
    const newCommentItem = {
      id: uuidV4(),
      name,
      comment,
      liked: false,
      color:
        initialContainerBackgroundClassNames[
          commentObject.length % initialContainerBackgroundClassNames.length
        ],
      duration: formatDistanceToNow(new Date()),
    }
    this.setState(pervState => ({
      commentObject: [...pervState.commentObject, newCommentItem],
      name: '',
      comment: '',
    }))
  }

  userNameChanged = event => {
    this.setState({name: event.target.value})
  }

  userCommentChanged = event => {
    this.setState({comment: event.target.value})
  }

  likedButton = id => {
    const {commentObject} = this.state
    const filteredList = commentObject.map(eachOne => {
      if (eachOne.id === id) {
        return {...eachOne, liked: !eachOne.liked}
      }
      return eachOne
    })
    this.setState({commentObject: filteredList})
  }

  deleteButton = id => {
    const {commentObject} = this.state
    const filteredList = commentObject.filter(eachOne => eachOne.id !== id)
    this.setState({commentObject: filteredList})
  }

  render() {
    const {name, comment, commentObject} = this.state

    return (
      <>
        <div className="background-container">
          <h1 className="comments-heading">Comments</h1>
          <div className="userInput-image-container">
            <form
              className="user-input-container"
              type="submit"
              onSubmit={this.saveComment}
            >
              <p htmlFor="note" className="para">
                Say Something about our 4.0 Technologies
              </p>
              <input
                type="search"
                className="user-input"
                placeholder="Your Name"
                id="note"
                value={name}
                onChange={this.userNameChanged}
              />
              <textarea
                rows="10"
                cols="52"
                className="text-area-input"
                placeholder="Your Comment"
                value={comment}
                onChange={this.userCommentChanged}
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

          <div className="count-of-comments">
            <p className="count-para">{commentObject.length}</p>
            <p className="count-comment-para">Comments</p>
          </div>
        </div>
        <ul>
          {commentObject.map(eachOne => (
            <CommentItem
              itemDetails={eachOne}
              likedButton={this.likedButton}
              deleteButton={this.deleteButton}
              key={eachOne.id}
            />
          ))}
        </ul>
      </>
    )
  }
}

export default Comments
