﻿Bridge.assembly("ReactReduxTodoApp", function ($asm, globals) {
    "use strict";

    Bridge.define("ReactReduxTodoApp.UI.Components", {
        statics: {
            todoItem: function (todo, onToggleComplete, onDelete) {
                return React.DOM.div({ style: ReactReduxTodoApp.UI.Styles.todoItemStyle }, React.DOM.div({ style: todo.isCompleted ? ReactReduxTodoApp.UI.Styles.textStyleComplete : ReactReduxTodoApp.UI.Styles.textStyleNotComplete }, todo.description), React.DOM.button({ onClick: function (e) {
                        onToggleComplete(todo.id);
                    }, className: "btn btn-primary" }, "Toggle complete"), React.DOM.button({ onClick: function (e) {
                        onDelete(todo.id);
                    }, className: "btn btn-anger" }, "Delete"));
            },
            todoItemList: function (appStore) {
                return Bridge.React.Component$2(Bridge.ReactRedux.ContainerProps$2(Object,Object),Object).op_Implicit$1(new (Bridge.ReactRedux.ReduxComponent$2(Object,Object))(Bridge.merge(new (Bridge.ReactRedux.ContainerProps$2(Object,Object))(), {
                    setStore: appStore,
                    setStateToPropsMapper: $_.ReactReduxTodoApp.UI.Components.f1,
                    setRenderer: function (appState) {
                        var todoIsCompleted = $_.ReactReduxTodoApp.UI.Components.f2;
                        var todoNotCompleted = $_.ReactReduxTodoApp.UI.Components.f3;

                        var todos;

                        if (appState.visibility === "completed") {
                            todos = System.Linq.Enumerable.from(appState.todos).where(todoIsCompleted);
                        } else {
                            if (appState.visibility === "yetToComplete") {
                                todos = System.Linq.Enumerable.from(appState.todos).where(todoNotCompleted);
                            } else {
                                todos = appState.todos;
                            }
                        }


                        var todoItems = System.Linq.Enumerable.from(todos).select(function (todo) {
                                return ReactReduxTodoApp.UI.Components.todoItem(todo, function (id) {
                                    Bridge.Redux.Extensions.dispatch(Object, ReactReduxTodoApp.Actions.ToggleTodoCompleted, appStore, Bridge.merge(new ReactReduxTodoApp.Actions.ToggleTodoCompleted(), {
                                        setId: id
                                    } ));
                                }, function (id) {
                                    Bridge.Redux.Extensions.dispatch(Object, ReactReduxTodoApp.Actions.DeleteTodo, appStore, Bridge.merge(new ReactReduxTodoApp.Actions.DeleteTodo(), {
                                        setId: id
                                    } ));
                                });
                            });

                        return React.DOM.div({ style: { padding: "5px" } }, React.DOM.ul({  }, System.Linq.Enumerable.from(todoItems.select(function (child) { return React.DOM.li(null, child); })).toArray()), React.DOM.hr({  }), React.DOM.input({ onInput: function (e) {
                            if (!System.String.isNullOrWhiteSpace(e.currentTarget.value)) {
                                Bridge.Redux.Extensions.dispatch(Object, ReactReduxTodoApp.Actions.UpdateDescriptionInput, appStore, Bridge.merge(new ReactReduxTodoApp.Actions.UpdateDescriptionInput(), {
                                    setDescription: e.currentTarget.value
                                } ));
                            }
                        } }), React.DOM.button({ className: "btn btn-success", onClick: function (e) {
                                if (!System.String.isNullOrWhiteSpace(appState.descriptionInput)) {
                                    Bridge.Redux.Extensions.dispatch(Object, ReactReduxTodoApp.Actions.AddTodo, appStore, new ReactReduxTodoApp.Actions.AddTodo());
                                }
                            } }, "Add"));
                    }
                } )));
            }
        }
    });

    var $_ = {};

    Bridge.ns("ReactReduxTodoApp.UI.Components", $_);

    Bridge.apply($_.ReactReduxTodoApp.UI.Components, {
        f1: function (appState) {
            return appState;
        },
        f2: function (todo) {
            return todo.isCompleted;
        },
        f3: function (todo) {
            return todo.isCompleted === false;
        }
    });

    Bridge.define("ReactReduxTodoApp.UI.Styles", {
        statics: {
            todoItemStyle: null,
            textStyleComplete: null,
            textStyleNotComplete: null,
            config: {
                init: function () {
                    this.todoItemStyle = { margin: "5px", fontSize: 18 };
                    this.textStyleComplete = { textDecoration: "line-through" };
                    this.textStyleNotComplete = { textDecoration: "none" };
                }
            }
        }
    });
});
