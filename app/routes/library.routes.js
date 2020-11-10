const { authJwt } = require("../middleware");
const controller = require("../controllers/library.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    //library ekleme 
    app.post(
        "/api/admin/add-library",
        //[authJwt.verifyToken],
        controller.addLibrary,
    );
    //library güncelleme
    app.post(
        "/api/admin/update-library",
        //[authJwt.verifyToken],
        controller.updateLibrary,
    );
    //library delete
    app.post(
        "/api/admin/delete-library",
        //[authJwt.verifyToken],
        controller.deleteLibrary,
    );
    //library list
    app.get(
        "/api/admin/all-libraries",
        //[authJwt.verifyToken],
        controller.allLibrary,
    );
    app.get(
        "/api/admin/library/getbyid",
        //[authJwt.verifyToken],
        controller.getByIDLibrary,
    )

};