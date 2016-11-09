using Bridge.Html5;
using ReactReduxTodoApp.Models;
using System.Linq;

namespace ReactReduxTodoApp.Persistence
{
    public static class LocalStorage
    {
        private static T OfType<T>(this object x) => Bridge.Script.Write<T>("x");

        private static string AppId = "ReactReduxTodoApp";

        public static void SaveTodoAppState(TodoAppState state)
        {
            // Normalize IEnumerable to Array for easier retrieval
            state.Todos = state.Todos.ToArray();
            Window.LocalStorage.SetItem(AppId, JSON.Stringify(state));
        }

        public static bool HasState()
        {
            var storedData = Window.LocalStorage.GetItem(AppId).OfType<string>();
            return storedData != null && storedData != "";
        }

        public static TodoAppState FetchTodoAppState()
        {
            var stringifiedJson = Window.LocalStorage.GetItem(AppId).OfType<string>();

            return JSON.Parse(stringifiedJson).OfType<TodoAppState>();
        }
    }
}