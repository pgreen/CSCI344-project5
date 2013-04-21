var mongoose = require("mongoose"),
    TodosSchema,
    Todos;

mongoose.connect("mongodb://localhost/development");

TodosSchema = new mongoose.Schema({
    "item": String,
    "cat" : String
});

Todos = mongoose.model("Todos", TodosSchema);

Todos.findOne({}, function (err, result) {
    if (err !== null) {
	console.log(err);
    } else if (result === null) {
	var t = new Todos({
	    "item": "project5",
	    "cat": "school"
	});

	t.save(function (err) {
	    if (err !== null) {
		console.log(err);
	    }
	});
    }
});

module.exports = Todos;

