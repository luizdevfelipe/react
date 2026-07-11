import React from 'react';
import { useReducer } from 'react';

export const Test: React.FC = () => {
  const initialState = {
    count: 0,
  }

  function reducer(state: { count: number }, action: { type: string }) {
    switch (action.type) {
      case 'increment':
        return {
          ...state,
          count: state.count + 1,
        }

      case 'decrement':
        return {
          ...state,
          count: state.count - 1,
        }

      default:
        return state
    }
  }


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>

      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </>
  )

}
