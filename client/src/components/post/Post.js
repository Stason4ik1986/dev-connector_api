import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { Spinner } from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import Comment from '../post/Comment';
import CommentForm from '../post/CommentForm';
import { getPost } from '../../actions/post';

import PropTypes from 'prop-types';

const Post = ({ post: { post, loading }, match, getPost }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost, match.params.id]);
    return loading || post === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <Link to='/posts' className='btn'>
                Back To Posts
            </Link>
            <PostItem post={post} showActions={false}></PostItem>
            <CommentForm postId={post._id} />
            <div className='comments'>
                {post.comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
        </Fragment>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
