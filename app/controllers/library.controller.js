const db = require("../models");
const Library = db.library;

exports.addLibrary = (req, res) => {
    // Library database ekleme işlemi
    Library.create({
        LibraryName: req.body.LibraryName,
        LibraryIsDeleted: req.body.LibraryIsDeleted,
        UserID: req.body.UserID,
    })
        .then(library => {
            res.send({ message: "Library created successfully!", library: library });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

};
exports.updateLibrary = (req, res) => {
    //Library güncelleme  işlemi
    Library.update(
        {
            LibraryName: req.body.LibraryName,
            LibraryIsDeleted: req.body.LibraryIsDeleted
        },
        { returning: true, where: { LibraryID: req.query.library_id } }
    )
        .then((result) => {
            res.status(200)
                .send({
                    message: 'Library update success!',
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
exports.deleteLibrary = (req, res) => {
    //Library silme işlemi
    Library.destroy({
        where: {
            LibraryID: req.query.library_id
        }
    })
        .then(function (deletedRecord) {
            if (deletedRecord === 1) {
                res.status(200).json({ message: "Library Deleted successfully" });
            }
            else {
                res.status(404).json({ message: "Record not found" })
            }
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
};
exports.allLibrary = (req, res) => {
    //Library listeleme işlemi
    Library.findAll({
        where: {
            UserID: req.query.user_id
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};