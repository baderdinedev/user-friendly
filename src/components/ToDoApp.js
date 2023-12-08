import React, { useState } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';


const ToDoWrapper = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ToDoHeader = styled.h1`
  color: #333;
  text-align: center;
`;

const ToDoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ToDoItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
`;

const AddTodoInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ColorPickerWrapper = styled.div`
  margin-top: 10px;
`;

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [color, setColor] = useState('#000'); // Default color

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, color }]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
      <ToDoWrapper>
        <ToDoHeader>TODO APP</ToDoHeader>
        <ToDoList>
          {todos.map((todo, index) => (
            <ToDoItem key={index} style={{ backgroundColor: todo.color,color:'white' }}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(index)}>Supprimer</button>
            </ToDoItem>
          ))}
        </ToDoList>
        <AddTodoInput
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <ColorPickerWrapper>
          <ChromePicker color={color} onChange={(newColor) => setColor(newColor.hex)} />
        </ColorPickerWrapper>
        <button onClick={handleAddTodo}>Ajouter</button>
      </ToDoWrapper>
  );
};

export default ToDoApp;
