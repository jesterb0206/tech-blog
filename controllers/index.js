const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboardRoutes");
const homeRoutes = require("./homeRoutes");
const router = require("express").Router();

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
