const db = require("../models");
const Comment = db.comment;

exports.addComment = (req, res) => {
    //commnet database ekleem işlemi
    Comment.create({
        CommentName: req.body.CommentName,
        CommentText: req.body.CommentText,
        SummaryID: req.body.SummaryID,
        UserID: req.body.UserID,
    })
        .then(comment => {
            res.send({
                message: "Comment registered successfully!", comment: comment
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.updateComment = (req, res) => {
    //Comment güncelleme  işlemi
    Comment.update(
        {
            CommentName: req.body.CommentName,
            CommentText: req.body.CommentText,
            SummaryID: req.body.SummaryID,
            UserID: req.body.UserID,
        },
        { returning: true, where: { CommentID: req.query.comment_id } }
    )
        .then((result) => {
            res.status(200)
                .send({
                    message: 'Comment update success!',
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

exports.deleteComment = (req, res) => {
    //Commnet silme işlemi
    Comment.destroy({
        where: {
            CommentID: req.query.comment_id
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

exports.getCommentBySummary = (req, res) => {
    //Summary's All Comments
    Comment.findAll({
        where: {
            SummaryID: req.query.SummaryID
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.getUserAllComments = (req, res) => {
    //User All Commnets listeleme işlemi
    Comment.findAll({
        where: {
            UserID: req.query.user_id,
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};