const { authJwt } = require("../middleware");
const controller = require("../controllers/book.controller");

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
        "/api/admin/add-book",
        //[authJwt.verifyToken],
        controller.addBook,
    );
    //book güncelleme
    app.post(
        "/api/admin/update-book",
        //[authJwt.verifyToken],
        controller.updateBook,
    );
    //book delete
    app.post(
        "/api/admin/delete-book",
        //[authJwt.verifyToken],
        controller.deleteBook,
    );
    //book list
    app.get(
        "/api/admin/all-books",
        //[authJwt.verifyToken],
        controller.allBooks,
    );

};