import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

function Counter() {
    //js code
    //used to dispatch a function from action
    const dispatch = useDispatch();
    //component can access the state using useSelector Hook
    const count = useSelector((state) => state.counter.value);
    return (
        //jsx code
        <div className="d-flex flex-column justify-content-center align-items-center w-100 mt-5 mb-3">
            <h1 className="counter" style={{ fontSize: "90px" }}>
                {count}
            </h1>
            <div className="mt-5">
                <button
                    className="btn btn-success p-3 m-3"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    className="btn btn-warning p-3 m-3"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    className="btn btn-danger p-3 m-3"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Counter;