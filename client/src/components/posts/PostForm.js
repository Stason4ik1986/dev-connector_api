import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../../actions/post';

import PropTypes from 'prop-types';

const PostForm = ({ addPost }) => {
    const [text, setText] = useState('');

    return (
        <div className='post-form'>
            <div className='bg-primary p'>
                <h3>Say Something...</h3>
            </div>
            <form
                className='form my-1'
                onSubmit={(e) => {
                    e.preventDefault();
                    addPost({ text });
                    setText('');
                }}
            >
                <textarea
                    rows='5'
                    cols='30'
                    name='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Create a post'
                    required
                ></textarea>
                <input type='submit' className='btn btn-dark my-1' value='Submit' />
            </form>
        </div>
    );
};

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
