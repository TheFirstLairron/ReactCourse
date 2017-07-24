import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { fetchPosts } from '../actions/index';

class PostsIndex extends React.Component {
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return <li className="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        });
    }

    componentDidMount() {
        this.props.fetchPosts();
    }
}

function mapStatesToProp(state) {
    return { posts: state.posts };
}

export default connect(mapStatesToProp, { fetchPosts })(PostsIndex);