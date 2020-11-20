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
        "/api/user/add-comment",
        //[authJwt.verifyToken],
        controller.addComment,
    );
    //yorum güncelleme
    app.post(
        "/api/user/update-comment",
        //[authJwt.verifyToken],
        controller.updateComment,
    );
    //yorum delete
    app.post(
        "/api/user/delete-comment",
        //[authJwt.verifyToken],
        controller.deleteComment,
    );
    //yorum list
    app.get(
        "/api/user/all-comments",
        //[authJwt.verifyToken],
        controller.allComments,
    );
    app.get(
        "/api/user/user/all-comments",
        //[authJwt.verifyToken],
        controller.getUserAllComments,
    );
    app.get(
        "/api/admin/comment/getbyid",
        //[authJwt.verifyToken],
        controller.getByIDComment,
    );
}