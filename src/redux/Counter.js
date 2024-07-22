// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

export function Counter()  {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1 className='mb-0 mt-0 ms-5'>{count}</h1>
      <button className='fs-5 btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
      <button className='ms-2 fs-5 btn btn-warning' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
