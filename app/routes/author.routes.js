const { authJwt } = require("../middleware");
const controller = require("../controllers/author.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //author ekleme 
    app.post(
        "/api/admin/add-author",
        [authJwt.verifyToken],
        controller.addAuthor,
    );
    //author güncelleme
    app.post(
        "/api/admin/update-author",
        [authJwt.verifyToken],
        controller.updateAuthor,
    );
    //author silme
    app.post(
        "/api/admin/delete-author",
        [authJwt.verifyToken],
        controller.deleteAuthor,
    );
    //author listeleme
    app.get(
        "/api/admin/all-authors",
        [authJwt.verifyToken],
        controller.allAuthors,
    );
    app.get(
        "/api/admin/author/getbyid",
        //[authJwt.verifyToken],
        controller.getByIDAuthor,
    );

};