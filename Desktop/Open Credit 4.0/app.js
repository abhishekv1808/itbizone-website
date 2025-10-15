const express  = require('express');
const path = require('path');
const rootDir = require('./utils/mainUtils');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoDBURL = 'mongodb+srv://abhishekv1808:' + encodeURIComponent('Grow@$@2025') + '@aribnb.xvmlcnz.mongodb.net/opencredit?retryWrites=true&w=majority&appName=aribnb';
const userRouter = require('./routes/userRouter');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());
app.use(userRouter);

const port = 3005;

mongoose.connect(mongoDBURL).then(()=>{
    console.log("Connected to Mongodb database");
    app.listen(port, ()=>{
        console.log(`Server is running at the address : http://localhost:${port}`);
    })
}).catch((err)=>{
    console.log("There is an error in the console", err);
})