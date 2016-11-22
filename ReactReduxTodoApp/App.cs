using Bridge.Html5;
using Bridge.React;
using Bridge.Redux;

using ReactReduxTodoApp.Models;
using ReactReduxTodoApp.Reducers;
using ReactReduxTodoApp.UI;
using ReactReduxTodoApp.Persistence;
using ReactReduxTodoApp.Actions;

using Bridge;
using System.Linq;
using System;

namespace ReactReduxTodoApp
{
    public static class App
    {
        public static void Main()
        {
            var initialState = new TodoAppState
            {
                DescriptionInput = "",
                Visibility = TodoVisibility.All,
                Todos = new Todo[]
                {
                    new Todo
                    {
                        Id = 0,
                        Description = "Learn React + Redux in C#",
                        IsCompleted = true
                    },
                    new Todo
                    {
                        Id = 1,
                        Description = "Build an awesome app with them",
                        IsCompleted = false
                    }
                }
            };

            if (LocalStorage.HasState())
            {
                initialState  = LocalStorage.FetchTodoAppState();
            }

            var store = Redux.CreateStore(Todos.Reducer(initialState));

            store.Subscribe(() => LocalStorage.SaveTodoAppState(store.GetState()));

            React.Render(Components.TodoItemList(store), Document.GetElementById("root"));
        }
    }
}
