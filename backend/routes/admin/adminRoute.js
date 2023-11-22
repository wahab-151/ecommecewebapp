const adminRouter = require("express").Router();
const authAdmin = require("../../middlewares/authAdmin");
const adminController = require("../../controllers/admin/adminController");

// adminRouter.get("/allusers",authAdmin,adminController.getallUsers);
adminRouter.get("/allusers", adminController.getallUsers);
adminRouter.delete("/deleteuser", adminController.deleteUser);

module.exports = adminRouter;
