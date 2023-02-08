import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import styles from './Counter.module.css';

export function Counter() {

    const counter = useSelector((state) => state.counter);

    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({
            type: "increment"
        })
    }
    const decrementHandler = () => {
        dispatch({
            type: "decrement"
        })
    }

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={incrementHandler}
                >
                    +
                </button>
                <span className={styles.value}>{counter}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={decrementHandler}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                />
                <button
                    className={styles.button}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}

                >
                    Add Async
                </button>
            </div>
        </div>
    );
}
