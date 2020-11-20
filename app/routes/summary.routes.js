const { authJwt } = require("../middleware");
const controller = require("../controllers/summary.controller");

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
        "/api/admin/add-summary",
        //[authJwt.verifyToken],
        controller.addSummary,
    );
    //book delete
    app.post(
        "/api/admin/delete-summary",
        //[authJwt.verifyToken],
        controller.deleteSummary,
    );
    app.post(
        "/api/admin/update-summary",
        //[authJwt.verifyToken],
        controller.updateSummary,
    );
    //book list
    app.get(
        "/api/admin/getbyUser-summary",
        //[authJwt.verifyToken],
        controller.getSummaryByUser,
    );
    app.get(
        "/api/admin/getbyBook-summary",
        //[authJwt.verifyToken],
        controller.getSummaryByBook,
    );
    app.get(
        "/api/admin/getUser-summaryWriter",
        //[authJwt.verifyToken],
        controller.getSummaryWriter,
    );
    app.get(
        "/api/admin/getSummaryById",
        //[authJwt.verifyToken],
        controller.getSummaryByID,
    );
};