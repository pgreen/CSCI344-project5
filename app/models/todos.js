var mongoose = require("mongoose"),
    TodosSchema,
    Todos;

mongoose.connect("mongodb://localhost/development");

TodosSchema = new mongoose.Schema({
    "description": String,
    "categories" : String
});

Todos = mongoose.model("Todos", TodosSchema);

Todos.findOne({}, function (err, result) {
    if (err !== null) {
		console.log(err);
    } else if (result === null) {
		var t = new Todos({
			"description": "project5",
			"categories": "school"
		});

		t.save(function (err) {
			if (err !== null) {
				console.log(err);
			}
		});
    }
});

module.exports = Todos;

