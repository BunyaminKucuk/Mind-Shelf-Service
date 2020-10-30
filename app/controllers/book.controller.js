const db = require("../models");
const Book = db.book;

exports.addBook = (req, res) => {
    // Book database ekleme işlemi
    Book.create({
        BookName: req.body.BookName,
        BookPage: req.body.BookPage,
        BookType: req.body.BookType,
        Publisher: req.body.Publisher,
        PublicationYear: req.body.PublicationYear,
        BookIsDeleted: req.body.BookIsDeleted,
        AuthorID: req.body.AuthorID
    })
        .then(book => {
            res.send({ message: "User registered successfully!", book: book });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

};
exports.updateBook = (req, res) => {
    //Book güncelleme  işlemi
    Book.update(
        {
            BookName: req.body.BookName,
            BookPage: req.body.BookPage,
            BookType: req.body.BookType,
            Publisher: req.body.Publisher,
            PublicationYear: req.body.PublicationYear,
            BookIsDeleted: req.body.BookIsDeleted,
            AuthorID: req.body.AuthorID
        },
        { returning: true, where: { BookID: req.query.book_id } }
    )
        .then((result) => {
            res.status(200)
                .send({
                    message: 'Book update success!',
                    result: result,
                });
        })
        .catch((err) => {
            res.status(500)
                .send({
                    message: err
                });
        });
};
exports.deleteBook = (req, res) => {
    //Book silme işlemi
    Book.destroy({
        where: {
            BookID: req.query.book_id
        }
    })
        .then(function (deletedRecord) {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Deleted successfully" });
            }
            else {
                res.status(404).json({ message: "Record not found" })
            }
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
};
exports.allBooks = (req, res) => {
    //Book listeleme işlemi
    Book.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};