// Example usage in app.js
const MyModel = require('./models/PersonModel');


//console.log(MyModel);


// Creating a new user
var john = new MyModel({
    name: "Omer",
    surname: "Ahmed",
    age: 32,
    created: { $db_function: 'toTimestamp(now())' }
});
john.save(function(err){
    if(err) {
        console.log(err);
        return;
    }
    console.log('Yuppiie!');
});