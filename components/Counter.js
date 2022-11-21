import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()// it return a despatch function which dispatch a action against our redux store 
                                
  

  const incrementHandler = ()=>{
       dispatch({type:"increment"})
  } 

  const decrementHandler = ()=>{
       dispatch({type:"decrement"})   
  }
              

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
