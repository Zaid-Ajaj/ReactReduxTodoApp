/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2016
 * @compiler Bridge.NET 15.3.0
 */
Bridge.assembly("ReactReduxTodoApp", function ($asm, globals) {
    "use strict";

    Bridge.define("ReactReduxTodoApp.Actions.AddTodo");

    Bridge.define("ReactReduxTodoApp.Actions.DeleteTodo", {
        config: {
            properties: {
                Id: 0
            }
        }
    });

    Bridge.define("ReactReduxTodoApp.Actions.SetVisibility", {
        config: {
            properties: {
                Visibility: 0
            }
        }
    });

    Bridge.define("ReactReduxTodoApp.Actions.ToggleTodoCompleted", {
        config: {
            properties: {
                Id: 0
            }
        }
    });

    Bridge.define("ReactReduxTodoApp.Actions.UpdateDescriptionInput", {
        config: {
            properties: {
                Description: null
            }
        }
    });

    Bridge.define("ReactReduxTodoApp.Actions.UpdateTodo", {
        config: {
            properties: {
                Id: 0,
                Description: null
            }
        }
    });
});
