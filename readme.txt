RESTFUL ROUTES

name        	url         verb        	desc						        Mongoose method
===========================================================================================================
INDEX       /dogs           GET        	Display a list of all dogs				Dog.find();
NEW         /dogs/new      	GET        	Show form to create a new dog			NA
CREATE     	/dogs           POST        Add new dog to DB						Dog.create();
SHOW        /dogs/:id       GET        	Show info about one dog					Dog.findById();
EDIT        /dogs/:id/edit  GET        	Show edit form for one dog				Dog.findById();
UPDATE      /dogs/:id       PUT        	Update dog data in the DB				Dog.findByIdAndUpdate();
DESTROY     /dogs/:id       DELETE      Delete a particular dog from the db		Dog.findByIdAndRemove();	