Bridge.assembly("ReactReduxTodoApp", function ($asm, globals) {
    "use strict";

    Bridge.define("ReactReduxTodoApp.Reducers.Todos", {
        statics: {
            reducer: null,
            config: {
                init: function () {
                    this.reducer = Bridge.Redux.BuildReducer.for(Object).whenActionHasType$1(ReactReduxTodoApp.Actions.AddTodo, ReactReduxTodoApp.Reducers.Todos.addTodo).whenActionHasType$1(ReactReduxTodoApp.Actions.DeleteTodo, ReactReduxTodoApp.Reducers.Todos.deleteTodo).whenActionHasType$1(ReactReduxTodoApp.Actions.UpdateTodo, ReactReduxTodoApp.Reducers.Todos.updateTodo).whenActionHasType$1(ReactReduxTodoApp.Actions.ToggleTodoCompleted, ReactReduxTodoApp.Reducers.Todos.toggleTodoCompleted).whenActionHasType$1(ReactReduxTodoApp.Actions.SetVisibility, ReactReduxTodoApp.Reducers.Todos.setVisibility).whenActionHasType$1(ReactReduxTodoApp.Actions.UpdateDescriptionInput, ReactReduxTodoApp.Reducers.Todos.updateDescriptionInput).build();
                }
            },
            addTodo: function (state, act) {
                var maxId = System.Linq.Enumerable.from(state.todos).max($_.ReactReduxTodoApp.Reducers.Todos.f1);
                var nextId = (maxId + 1) | 0;

                var todo = { id: nextId, description: state.descriptionInput, isCompleted: false };

                return { todos: System.Linq.Enumerable.from(state.todos).concat([todo]), visibility: state.visibility };
            },
            deleteTodo: function (state, act) {
                return { todos: System.Linq.Enumerable.from(state.todos).where(function (todo) {
                        return todo.id !== act.getId();
                    }), visibility: state.visibility };
            },
            updateTodo: function (state, act) {
                return { todos: System.Linq.Enumerable.from(state.todos).select(function (todo) {
                        if (todo.id === act.getId()) {
                            return { id: todo.id, description: act.getDescription(), isCompleted: todo.isCompleted };
                        } else {
                            return todo;
                        }
                    }), visibility: state.visibility };
            },
            toggleTodoCompleted: function (state, act) {
                return { todos: System.Linq.Enumerable.from(state.todos).select(function (todo) {
                        if (todo.id === act.getId()) {
                            return { id: todo.id, description: todo.description, isCompleted: !todo.isCompleted };
                        } else {
                            return todo;
                        }
                    }) };
            },
            updateDescriptionInput: function (state, act) {
                return { todos: state.todos, visibility: state.visibility, descriptionInput: act.getDescription() };
            },
            setVisibility: function (state, act) {
                return { todos: state.todos, visibility: act.getVisibility() };
            }
        }
    });

    var $_ = {};

    Bridge.ns("ReactReduxTodoApp.Reducers.Todos", $_);

    Bridge.apply($_.ReactReduxTodoApp.Reducers.Todos, {
        f1: function (_todo) {
            return _todo.id;
        }
    });
});
