const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //yorum ekleme
    app.post(
        "/api/admin/add-comment",
        //[authJwt.verifyToken],
        controller.addComment,
    );
    //yorum güncelleme
    app.post(
        "/api/admin/update-comment",
        //[authJwt.verifyToken],
        controller.updateComment,
    );
    //yorum delete
    app.post(
        "/api/admin/delete-comment",
        //[authJwt.verifyToken],
        controller.deleteComment,
    );
    app.get(
        "/api/admin/getBySummary-comments",
        //[authJwt.verifyToken],
        controller.getCommentBySummary,
    )
    app.get(
        "/api/admin/user/all-comments",
        //[authJwt.verifyToken],
        controller.getUserAllComments,
    );
    app.get(
        "/api/admin/comment/getbyid",
        //[authJwt.verifyToken],
        controller.getByIDComment,
    );
}