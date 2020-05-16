var toDo = new Vue({
	el: "#toDo",
	data: {
		newTask: '',
		todoList: []
	},
	methods: {
		addTask: function(){
			var task = this.newTask;
			this.todoList.push(task);
			this.newTask = '';
			console.log('task added');
		},
		removeTask: function(task) {
			var index = this.todoList.indexOf(task);
			this.todoList.splice(index, 1);
		}

	}
});