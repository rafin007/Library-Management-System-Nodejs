var db = require.main.require('./models/config');

var getAll = (callback) => {
    var sql = "SELECT * FROM books";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var searchBy = (searchBy, word, callback) => {
    var sql = "SELECT * FROM books WHERE "+searchBy+" = ?";
    db.executeQuery(sql, [word], function(result) {
        callback(result);
    });
};

var createBook = (book, callback) => {
    var sql = "INSERT INTO books VALUES(null, null, ?, ?, ?, ?, ?, ?, ?)";
    db.executeQuery(sql, [book.genre, book.title, book.author, book.publisher, book.edition, book.isbn, book.pages], function(result) {
        callback(result);
    });
};

var getBook = (id, callback) => {
    var sql = "SELECT * FROM books WHERE book_id=?";
    db.executeQuery(sql, [id], function(result) {
        callback(result[0]);
    });
};

var updateBook = (id, book, callback) => {
    var sql = "UPDATE books SET genre = ?, title = ?, author = ?, publisher = ?, edition = ?, isbn = ?, pages = ? WHERE book_id = ?";
    db.executeQuery(sql, [book.genre, book.title, book.author, book.publisher, book.edition, book.isbn, book.pages, id], function(result) {
        callback(result);
    });
};

var deleteBook = (id, callback) => {
    var sql = "DELETE FROM books WHERE book_id = ?";
    db.executeQuery(sql, [id], function(result) {
        callback(result);
    });
};

var issueBook = (book_id, customer_id, callback) => {
    var date = new Date();
    var sql = "UPDATE books SET user_id = ?, date_issued = ? WHERE book_id = ?";
    db.executeQuery(sql, [customer_id, date, book_id], function(result) {
        callback(result);
    });
};

var unissueBook = (book_id, callback) => {
    var sql = "UPDATE books SET user_id = '', date_issued = '' WHERE book_id = ?";
    db.executeQuery(sql, [book_id], function(result) {
        callback(result);
    });
};

var getIssuedBooks = (id, callback) => {
    var sql = "SELECT * FROM books WHERE NOT user_id = ''";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var getUnborrowedBooks = (callback) => {
    var sql = "SELECT * FROM books WHERE (user_id = '') OR (user_id = 0)";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var bookRequest = (customer_id, book, callback) => {
    var date = new Date();
    var sql = "INSERT INTO books_request VALUES(null, ?, ?, ?, ?, ?, ?, ?)";
    db.executeQuery(sql, [customer_id, book.genre, book.title, book.author, book.edition, book.isbn, date], function(result) {
        callback(result);
    });
};

var customerSearch = (searchBy, word, callback) => {
    var sql = "(SELECT * FROM books WHERE "+searchBy+" = ?) AND ((user_id = '') OR (user_id = 0))";
    db.executeQuery(sql, [word], function(result) {
        callback(result);
    });
};

var getRequestedBooks = (callback) => {
    var sql = "SELECT * FROM books_request";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var bookRequestSearch = (searchBy, word, callback) => {
    var sql = "SELECT * FROM books_request WHERE "+searchBy+" = ?";
    db.executeQuery(sql, [word], function(result) {
        callback(result);
    });
};

var setIssueDate = (book_id, customer_id, callback) => {
    var date = new Date();
    var sql = "INSERT INTO issue_date VALUES(null, ?, ?, ?)";
    db.executeQuery(sql, [book_id, customer_id, date], function(result) {
        callback(result);
    });
};

var booksIssuedByCustomer = (customer_id, callback) => {
    var sql = "SELECT * FROM books WHERE user_id = ?";
    db.executeQuery(sql, [customer_id], function(result) {
        callback(result);
    });
};


module.exports = {
    getAll,
    searchBy,
    createBook,
    getBook,
    updateBook,
    deleteBook,
    issueBook,
    unissueBook,
    getIssuedBooks,
    getUnborrowedBooks,
    bookRequest,
    customerSearch,
    getRequestedBooks,
    bookRequestSearch,
    setIssueDate,
    booksIssuedByCustomer
};
