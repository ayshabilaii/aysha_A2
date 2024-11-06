/* SPA --> single pag eapplication */
/* client side */
// IIFE --> immediately invoked function expression 

(function() {
    function start() {
        console.log("App Started");
    }

    window.addEventListener("load", start);
})();

/* installed 3rd party package */
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//contact emails 
app.post('/contact', (req, res) => {
  const { name, email, comments, maillist } = req.body;
  // Here, you can add logic to send an email or save the data
  res.send('Thank you for contacting us!');
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

<form action="/contact" method="post" name="form"/>

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.ejs'));
});
