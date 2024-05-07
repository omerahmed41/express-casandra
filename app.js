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


MyModel.findOne({name: 'Omer'}, function(err, john){
    if(err) {
        console.log(err);
        return;
    }
    //Note that returned variable john here is an instance of your model,
    //so you can also do john.delete(), john.save() type operations on the instance.
    console.log('Found ' + john.name + ' to be ' + john.age + ' years old!');
});