// Is an Action Creator    vvvvvvvvvvvvvvvvvvvvvvvvvvvv
export function selectBook(book) {
    // must return an action. EX: {type: xxxxxxxx, ...}
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}