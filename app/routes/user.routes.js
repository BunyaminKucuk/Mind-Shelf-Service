const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = function (app) {
    
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/admin/update-status",
        [authJwt.verifyToken],
        controller.updateUserStatus,
    )
    app.post(
        "/api/user/profile-edit",
        [authJwt.verifyToken],
        controller.profileEdit,
    )
    app.post(
        "/api/admin/user-delete",
        [authJwt.verifyToken],
        controller.userDelete,
    )
    app.get("/api/test/all", controller.allAccess);
    app.get(
        "/api/admin/allusers",
        [authJwt.verifyToken],
        controller.allUsers
    );

    app.get(
        "/api/admin/getbyid",
        [authJwt.verifyToken],
        controller.getById,
    )

    app.get(
        "/api/test/user",
        [authJwt.verifyToken],
        controller.userBoard
    );

    app.get(
        "/api/test/mod",
        [authJwt.verifyToken, authJwt.isModerator],
        controller.moderatorBoard
    );

    app.get(
        "/api/test/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

};
