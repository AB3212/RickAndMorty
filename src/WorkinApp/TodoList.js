import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const InputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const AddTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex === -1) {
        setTodos([...todos, { text: inputValue, completed: false }]);
      } else {
        const newTodos = [...todos];
        newTodos[editIndex] = { text: inputValue, completed: false };
        setTodos(newTodos);
        setEditIndex(-1);
      }
      setInputValue('');
    }
  };


  const EditTodo = (index) => {
    setInputValue(todos[index].text);
    setEditIndex(index);
  };

  const DeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const checkBox = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };


  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="text-center mb-4">Todo List</h1>
          <Form className='d-flex '>
            <Form.Group >
              <Form.Control
                type="text"
                value={inputValue}
                onChange={InputChange}
                placeholder="EnterInformation"
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={AddTodo}
              className="ms-auto"
            >
              {editIndex === -1 ? 'Add' : 'Update'}
            </Button>
          </Form>
          <ListGroup className="mt-3 ">
            {todos.map((todo, index) => (
              <ListGroup.Item key={index} className='d-flex' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              >
                <Form.Check
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => checkBox(index)}
                  className=" me-2"
                />
                {todo.text}
              <div className='ms-auto'>
              <Button
                  variant="warning"
                  className="ms-2 "
                  size="sm"
                  onClick={() => EditTodo(index)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  size="sm"
                  onClick={() => DeleteTodo(index)}
                >
                  Delete
                </Button>
              </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App
