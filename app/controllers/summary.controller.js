const { summary } = require("../models");
const db = require("../models");
const Summary = db.summary;

exports.addSummary = (req, res) => {
    // Summary database ekleme işlemi
    Summary.create({
        SummaryText: req.body.SummaryText,
        SummaryIsDeleted: req.body.SummaryIsDeleted,
        BookID: req.body.BookID,
        UserID: req.body.UserID
    })
        .then(summary => {
            res.send({ message: "Summary added successfully!", Summary: summary });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

};
exports.updateSummary = (req, res) => {
    // Summary database güncelleme  işlemi
    Summary.update({
        SummaryText: req.body.SummaryText,
        SummaryIsDeleted: req.body.SummaryIsDeleted,
        BookID: req.body.BookID,
        UserID: req.body.UserID
    }, { returning: true, where: { SummaryID: req.query.summary_id } })
        .then(summary => {
            res.send({ message: "Summary updated successfully!", Summary: summary });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });

};
exports.deleteSummary = (req, res) => {
    //Summary delete işlemi
    Summary.destroy({
        where: {
            SummaryID: req.query.summary_id
        }
    }).then(function (deletedRecord) {
        if (deletedRecord === 1) {
            res.status(200).json({ message: "Summary deleted successfully" });
        }
        else {
            res.status(404).json({ message: "Record not found" })
        }
    })
        .catch(function (error) {
            res.status(500).json(error);
        });
};
exports.getSummaryByUser = (req, res) => {
    //Auyhor Books listeleme işlemi
    Summary.findAll({
        where: {
            UserID: req.query.user_id,
            BookID: req.query.book_id
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};
exports.getSummaryByBook = (req, res) => {
    //Auyhor Books listeleme işlemi
    Summary.findAll({
        where: {
            BookID: req.query.book_id
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.getSummaryWriter = (req, res) => {
    Summary.findByPk(req.query.summary_id).then(user => {
        res.status(200)
            .send({
                user_id: user.UserID
            });
    });
};
exports.getSummaryByID = (req, res) => {
    Summary.findByPk(req.query.summary_id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};