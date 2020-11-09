const { authJwt } = require("../middleware");
const controller = require("../controllers/librariesBook.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //book ekleme 
    app.post(
        "/api/admin/library/add-book",
        //[authJwt.verifyToken],
        controller.addBookOnLibrary,
    );
    //book delete
    app.post(
        "/api/admin/library/delete-book",
        //[authJwt.verifyToken],
        controller.deleteBookOnLibrary,
    );
    //book list
    app.get(
        "/api/admin/library/all-books",
        //[authJwt.verifyToken],
        controller.allBooksOnLibrary,
    );

};