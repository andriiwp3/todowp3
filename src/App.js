import React from "react";
import TodoList from "./containers/TodoList/TodoList";
import Layout from "./hoc/Layout/Layout";

const isTodoCompleted = (todo) => {
   return todo.completed;
};

const saveDataToLocalStorage = (name, item) => {
   localStorage.setItem(name, JSON.stringify(item));
};

const getDataFromLocalStorage = (name, item) => {
   return JSON.parse(localStorage.getItem(name));
};

class App extends React.Component {
   state = {};

   componentDidMount() {
      let state = getDataFromLocalStorage("todos");
      if (state && state.todos.length > 0) {
         this.setState(state);
      } else {
         this.setState({
            completedTodoCount: 0,
            addInputText: "",
            todos: [],
         });
      }
   }

   componentWillUpdate(nextProps, nextState) {
      saveDataToLocalStorage("todos", nextState);
   }

   onAddTask = (event) => {
      if (
         (event.type === "keydown" && event.key === "Enter") ||
         event.nativeEvent.type === "click"
      ) {
         if (
            this.state.addInputText.trim() !== "" &&
            this.state.addInputText.trim() !== null
         ) {
            let todos = [...this.state.todos];
            let newTodo = {
               text: this.state.addInputText,
               completed: false,
               edited: false,
            };
            todos.push(newTodo);
            this.setState({ addInputText: "", todos });
         }
      }
   };

   onAddInputChange = (event) => {
      this.setState({
         addInputText: event.target.value,
      });
   };

   onTodoChangeHandler = (number) => {
      const todos = [...this.state.todos];
      const todo = { ...todos[number] };
      todo.completed = !todo.completed;
      todos[number] = todo;
      this.setState({
         completedTodoCount: todo.completed
            ? this.state.completedTodoCount + 1
            : this.state.completedTodoCount - 1,
         todos,
      });
   };

   onDoubleClickHandler = (index, event) => {
      let todos = [...this.state.todos];
      todos[index].edited = true;
      this.setState({ todos });
   };

   onChangeInput = (index, event) => {
      let todos = [...this.state.todos];
      todos[index].text = event.target.value;
      this.setState({
         todos,
      });
   };

   onBlurInput = (index, event) => {
      if (
         (event.type === "keydown" && event.key === "Enter") ||
         event.nativeEvent.type === "blur"
      ) {
         let todos = [...this.state.todos];
         todos[index].edited = false;
         this.setState({ todos });
      }
   };

   onDeleteButtonClick = (index) => {
      let todos = [...this.state.todos];
      let todo = todos[index];
      todos.splice(index, 1);
      this.setState({
         completedTodoCount: isTodoCompleted(todo)
            ? this.state.completedTodoCount - 1
            : this.state.completedTodoCount,
         todos,
      });
   };

   render() {
      return (
         <Layout>
            <TodoList
               addInputText={this.state.addInputText}
               onAddButtonClick={this.onAddTask}
               onAddInputChange={this.onAddInputChange}
               todoItems={this.state.todos ? this.state.todos : []}
               completedTodos={this.state.completedTodoCount}
               onTodoChangeHandler={this.onTodoChangeHandler}
               onDoubleClickHandler={this.onDoubleClickHandler}
               onChangeInput={this.onChangeInput}
               onBlurInput={this.onBlurInput}
               onDeleteButtonClick={this.onDeleteButtonClick}
            />
         </Layout>
      );
   }
}

export default App;
