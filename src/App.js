import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import MainContent from './components/main-content';
import Header from './components/shared/header';
import AddComment from './components/shared/add-comment';
import { showAddComment, handleComment, addComment, deleteComment } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  toggleAddComment = () => { return this.props.toggleAddComment(); };

  handleComment = (evnt) => { 
    this.setState({ comment: evnt.target.value }, () => this.props.handleComment(this.state.comment));
  };

  saveComment = () => {
    const { comment } = this.state;

    if (this.props.comment && this.props.comment.length > 0) {
      console.log('agregado')
      return this.props.saveComment(comment);
    }
    return alert('Campo comentario es requerido!')
  };

  deleteComment = (commentSelected, index) => {
    if (this.props.comments && this.props.comments.length > 0) {
      return this.props.deleteComment(commentSelected, index)
    }
  }

  render() {
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
  return {
    comment: state.comments.comment,
    comments: state.comments.comments,
    showAddComment: state.comments.showAddComment
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddComment: () => { dispatch(showAddComment()) },
    handleComment: (comment) => { dispatch(handleComment(comment)) },
    saveComment: (comment) => { dispatch(addComment(comment)) },
    deleteComment: (comment, index) => { dispatch(deleteComment(comment, index)) }
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
