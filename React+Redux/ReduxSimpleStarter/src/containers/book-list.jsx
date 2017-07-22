import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
    render() {
        return <ul className='list-group col-sm-4'>
            {this.renderList()}
        </ul>
    }

    renderList() {
        return this.props.books.map(book => {
            return <li key={book.title} className='list-group-item' onClick={() => {this.props.selectBook(book)}}>
                {book.title}
            </li>;
        });
    }
}

function mapStateToProps(state) {
    // Whatevers returned here will become props inside of booklist
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    // Ensure all reducers receive result from selectBook
    // selectBook is now a prop
    return bindActionCreators({ selectBook }, dispatch);
}

// Promotes BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);