const db = require("../models");
const LibrariesBook = db.librariesBook;
const Book = db.book;
exports.addBookOnLibrary = (req, res) => {
    // Library database ekleme işlemi
    LibrariesBook.create({
        LibraryID: req.body.LibraryID,
        BookID: req.body.BookID
    })
        .then(librariesBook => {
            res.send({ message: "Book added on Library successfully!", librariesBook: librariesBook });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

};
exports.deleteBookOnLibrary = (req, res) => {
    //Library den Book silme işlemi
    LibrariesBook.destroy({
        where: {
            BookID: req.query.book_id
        }
    })
        .then(function (deletedRecord) {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Book Deleted on Library successfully" });
            }
            else {
                res.status(404).json({ message: "Record not found" })
            }
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
};
exports.allBooksOnLibrary = (req, res) => {
    //Library de bulunan tüm Books listeleme işlemi
    LibrariesBook.findAll({
        where: {
            LibraryID: req.query.library_id
        },
        include: {
            model: db.book
        }

    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};