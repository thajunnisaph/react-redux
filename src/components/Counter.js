import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const toggleCounterHandler = () => {};
  const incrementHandler = () =>{
    dispatch({type:'increment'});
  }
  const decrementHandler = () =>{
    dispatch({type:'decrement'});
  }
  const incrementby2Handler = () =>{
    dispatch({type:'incrementby2'});
  }
  const decrementby2Handler = () =>{
    dispatch({type:'decrementby2'});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementby2Handler}>Increment By 2</button>
        <button onClick={decrementby2Handler}>Decrement By 2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
