const express = require('express');
const path =require('path');
const rootDir = require('./utils/mainUtils');
const session = require('express-session');
const mongoose =require('mongoose');
const mongodbURL =  'mongodb+srv://abhishekv1808:' + encodeURIComponent('Grow@$@2025') + '@aribnb.xvmlcnz.mongodb.net/itbizone?retryWrites=true&w=majority&appName=aribnb';
const userRouter = require('./routes/userRouter');


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded({ extended: false }));


app.use(userRouter);

const port = 3000;


mongoose.connect(mongodbURL).then(()=>{
    console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((err)=>{
  console.log(err);
})
