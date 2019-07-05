import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import MainContent from './components/main-content';
import Header from './components/shared/header';
import AddComment from './components/shared/add-comment';
import { showAddComment, handleComment, addComment, deleteComment, getComments } from './redux/actions';
import { withApollo } from 'react-apollo';
import { POST_COMMENT, GET_COMMENTS, DELETE_COMMENT, GET_COMMENTS_FN } from './constants/queries';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }
  componentDidMount() {
    this.runQueryGetComments().then(data => {
      console.log(data.data.comments)
     return this.props.getComments(data.data.comments)
    });
  }
  componentDidUpdate() {
    console.log(this.props.comments)
    this.props.getComments(this.props.comments)
    //   this.runQueryGetComments().then(data => {
    //   console.log(data.data.comments)
    //  return this.props.getComments(data.data.comments)
    // });
    // if (this.props.comments && this.props.comments > 0) {
    //   return 
    // }
  }

  runQuery = () => {
    const { comment } = this.state;

    this.props.client.query({
      query: POST_COMMENT,
      variables: { comment },
    });
  }

  runQueryDeleteComment = (commentSelected, index) => {
    const { comment } = this.state;

    this.props.client.query({
      query: DELETE_COMMENT,
      variables: { comment: commentSelected, position: index },
    });
  }
  runQueryGetComments = () => {
    const a = this.props.client.query({
      query: GET_COMMENTS_FN,
      variables: {}
    })
    return a;
    console.log(a)
  }

  toggleAddComment = () => { return this.props.toggleAddComment(); };

  handleComment = (evnt) => { 
    this.setState({ comment: evnt.target.value }, () => this.props.handleComment(this.state.comment));
  };

  saveComment = () => {
    const { comment, comments } = this.state;
    // if (this.props.comment && this.props.comment.length > 0 && comments && comments.length === 0) {
    //   this.props.getComments()
    // }
    if (this.props.comment && this.props.comment.length > 0) {
      console.log('agregado')
      this.runQuery();
      return this.props.saveComment(comment);
    }
    return alert('Campo comentario es requerido!')
  };

  deleteComment = (commentSelected, index) => {
    // var a = this.runQueryGetComments();
    // console.log(a)
    // console.log(this.props.comments)
    // if (this.props.comments && this.props.comments.length > 0) {
      console.log('ejecutar query de borrar')
     return this.runQueryDeleteComment(commentSelected, index);
    //   return this.props.deleteComment(commentSelected, index)
    // }
  }

  render() {
    console.log(this.props.comments)
    return (
        <div className="App">
            <Header toggleAddComment={this.toggleAddComment} addComment={this.props.showAddComment} />
            <MainContent comments={this.props.comments} deleteComment={this.deleteComment}/>
            <AddComment addComment={this.props.showAddComment} comment={this.props.comment} handleComment={this.handleComment} saveComment={this.saveComment} />
          </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comment: state.comments.comment,
    comments: state.comments.comments,
    showAddComment: state.comments.showAddComment,
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddComment: () => { dispatch(showAddComment()) },
    handleComment: (comment) => { dispatch(handleComment(comment)) },
    saveComment: (comment) => { dispatch(addComment(comment)) },
    deleteComment: (comment, index) => { dispatch(deleteComment(comment, index)) },
    getComments: (comments) => { dispatch(getComments(comments)) }
  }
}

export default App = connect(
  mapStateToProps,
  mapDispatchToProps
)(withApollo(App));
