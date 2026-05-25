import { useState, memo, useId } from "react";

function Input(props) {
  // * useidhooks
  const { id = "input", label } = props;
  const inputId = useId();
  return (
    <>
      <label htmlFor="">
        <span>{label}</span>
        <input type="text" id={`${inputId}-${id}`} />
      </label>
      <p aria-details={`${inputId}-${id}`}>tes</p>
    </>
  );
}

const TodoList = memo((props) => {
  const { todos } = props;
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={`${todo}-${index}`}>{todo}</p>;
      })}
    </>
  );
});

TodoList.displayName = "TodoList";

const Counter = memo((props) => {
  const { count } = props;
  return <p>Count: {count}</p>;
});

Counter.displayName = "Counter";

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "Create Video"]);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo]);
  };
  return (
    <>
      <TodoList todos={todos} />
      <button onClick={() => addTodo("Playing Piano")}>Add Todo</button>
      <Counter count={count} />
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default ExampleMemo;
