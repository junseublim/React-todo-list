import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    })
  }
  return array;
}

const App = () => {

  // 파라미터로 함수형태로 넘기면 컴포넌트가 처음 렌더링될 때만 createBultTodos가 실행되지만,
  // createBultTodos()로 넘겨주면 리렌더링마다 함수가 호출됨.
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checkeed: false,
      }
      setTodos(todos => [...todos, todo]);
      nextId.current += 1;
    }
  , [])

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    }
  ,[])

  const onToggle = useCallback(
    id => {
      setTodos(
        todos =>
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked}: todo)
      )
    }, []
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
};

export default App;
