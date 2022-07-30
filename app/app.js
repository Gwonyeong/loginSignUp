//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home")

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`))

app.use("/", home);//root경로로 오면 home미들웨어로 이동한다.



module.exports = app;

