const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "christinebush",
    password: "u3Oq)J#T",
  },
  {
    id: 2,
    username: "cynthiarussell",
    password: "1tKd>mXu",
  },
  {
    id: 3,
    username: "sheenagraves",
    password: "cmjb*l:Y",
  },
  {
    id: 4,
    username: "parkerfitzgerald",
    password: "[Gl~s9<2",
  },
  {
    id: 5,
    username: "danielbishop",
    password: "9a+v>JG5",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.export = seedUser;
