// Dependencies

const exphbs = require("express-handlebars");
const express = require("express");
const helpers = require("./utils/helpers");
const path = require("path");
const routes = require("./controllers");
const sequelize = require("./utils/helpers");
const SequelizeStore = require("./utils/helpers");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

// Create a session middleware with cookies enabled

const sess = {
    secret: "Super secret secret",
    cookie: {
        // Specifies the number (in milliseconds) to use when calculating the Expires Set-Cookie attribute (86,400 milliseconds is equal to 1 day).
        maxAge: 86400,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("\nServer running on port ${PORT}."));
});