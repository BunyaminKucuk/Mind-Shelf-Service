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
    Commnet.destroy({
        where: {
            CommnetID: req.query.comment_id
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

exports.allComments = (req, res) => {
    //Commnet listeleme işlemi
    Comment.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.send(err);
        });
};
exports.getCommentByUser = (req, res) => {
    //Auyhor Books listeleme işlemi
    Comment.findAll({
        where: {
            UserID: req.query.user_id,
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
    //User Commnets listeleme işlemi
    Commnet.findAll({
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

exports.getByIDComment = (req, res) => {
    //Coments listeleme işlemi
    Comment.findByPk(req.query.commnet_id).then(data => {
        res.status(200)
            .send(data);
    });
};