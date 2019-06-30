import React, { Component } from 'react';
import './App.css';
import MainContent from './components/main-content';
import Header from './components/shared/header';
import AddComment from './components/shared/add-comment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addComment: false,
      comment: '',
      comments: []
    }
  }

  toggleAddComment = () => {
    const { addComment } = this.state;

    this.setState({ addComment: !addComment });
  };

  handleComment = (evnt) => { this.setState({ comment: evnt.target.value }) };

  saveComment = () => {
    const { comments, comment } = this.state;
    let commentsAux = [];

    if (comment && comment.length > 0) {
      commentsAux = [...comments];
      commentsAux.push({comment});
      return this.setState({ comments: commentsAux });
    }
    return alert('Campo comentario es requerido!')
  };

  deleteComment = (commentSelected) => {
    const { comments } = this.state;
    let commentsUpdated = [];

    if (comments.length > 0) {
      for (let i = 0; i < comments.length; i++) {
        if (comments[i].comment === commentSelected) {
          commentsUpdated = [ ...comments ];
          commentsUpdated.splice(i, 1);
         return this.setState({ comments: commentsUpdated });
        }
      }
    }
  }

  render() {
    const { addComment, comment, comments } = this.state;
    return (
      <div className="App">
        <Header toggleAddComment={this.toggleAddComment} addComment={addComment} />
        <MainContent comments={comments} deleteComment={this.deleteComment}/>
        <AddComment addComment={addComment} comment={comment} handleComment={this.handleComment} saveComment={this.saveComment} />
      </div>
    );
  }
}

export default App;
