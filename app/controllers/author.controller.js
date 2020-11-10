const db = require("../models");
const Author = db.author;

exports.addAuthor = (req, res) => {
    // Author database ekleme işlemi
    Author.create({
        AuthorFirstName: req.body.AuthorFirstName,
        AuthorLastName: req.body.AuthorLastName,
        AuthorIsDeleted: req.body.AuthorIsDeleted,
    })
        .then(author => {
            res.send({ message: "Author added successfully!", author: author });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};
exports.updateAuthor = (req, res) => {
    //Author güncelleme işlemi
    Author.update(
        {
            AuthorFirstName: req.body.AuthorFirstName,
            AuthorLastName: req.body.AuthorLastName,
            AuthorIsDeleted: req.body.AuthorIsDeleted
        },
        { returning: true, where: { AuthorID: req.query.author_id } }
    )
        .then((result) => {
            res.status(200)
                .send({
                    message: 'Author update success!',
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
exports.deleteAuthor = (req, res) => {
    //Author silme işlemi
    Author.destroy({
        where: {
            AuthorID: req.query.author_id
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
exports.allAuthors = (req, res) => {
    //Author listeleme işlemi
    Author.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};
exports.getByIDAuthor = (req, res) => {
    //Library listeleme işlemi
    Author.findByPk(req.query.author_id).then(data => {
        res.status(200)
            .send(data);
    });
};