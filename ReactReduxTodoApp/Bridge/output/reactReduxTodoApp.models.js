Bridge.assembly("ReactReduxTodoApp", function ($asm, globals) {
    "use strict";

    Bridge.define("ReactReduxTodoApp.Models.TodoVisibility", {
        $kind: "enum",
        statics: {
            all: "all",
            completed: "completed",
            yetToComplete: "yetToComplete"
        },
        $utype: System.String
    });
});
