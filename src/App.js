import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { addComment } from 'redux/actions/addComment'
import './App.css';
import MainContent from './components/main-content';
import Header from './components/shared/header';
import AddComment from './components/shared/add-comment';
import { showAddComment, saveComment } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  toggleAddComment = () => { return this.props.toggleAddComment(); };

  handleComment = (evnt) => { 
    this.setState({ comment: evnt.target.value }, () => this.props.saveComment(this.state.comment));
  };

  saveComment = () => {
    // PUSH COMMENT IN TO ARRAY 
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
    console.log(this.props)
    return (
      <div className="App">
        <Header toggleAddComment={this.toggleAddComment} addComment={this.props.showAddComment} />
        <MainContent comments={this.props.comments} deleteComment={this.deleteComment}/>
        <AddComment addComment={this.props.showAddComment} comment={this.props.comment} handleComment={this.handleComment} saveComment={this.saveComment} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'mapStateToProps state')
  return {
    comment: state.comments.comment,
    comments: state.comments.comments,
    showAddComment: state.comments.showAddComment
  } 
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch, 'mapDispatchToProps dispatch')
  return {
    toggleAddComment: () => { dispatch(showAddComment()) },
    saveComment: (comment) => { dispatch(saveComment(comment)) }
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
