var express = require('express');
var router = express.Router();
const Book = require('../models/book');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Iteration 3

router.get('/books', (req, res, next) => {
  Book.find()
  .then(books => {
    console.log(books)
    res.render('books', {books: books})
  })
  .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
  })
});

router.get('/book/add', (req, res, next) => {
  //renderizamos book-add.hbs
  res.render('book-add')
});
/* POST /book/add --> sends the book information from the form to the server */
router.post('/book/add', (req, res, next) => {
  const {title, author, description, rating} = req.body;
  const newBook = new Book({title, author, description, rating});
  newBook.save()
  .then( () => {
    res.redirect('/books')  
  }) 
  .catch(error =>{
    console.log('Error')
  }) 
});


router.get('/book/:bookId', (req, res, next) => {
  Book.findById(req.params.bookId)
  .then(booksId => {
    console.log(booksId)
    res.render('book-details', {booksId})
  })
  .catch(error => {
    console.log('Error while getting the books from the DB: ', error);
  })
});



module.exports = router;
