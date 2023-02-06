/********************************************/
// Redux 
/********************************************/

// To access and update other components data or state we need redux
// it is a open source state management library to update and manage the state.
// withing the component we can change data using state and state and hooks
// But out side the component we can't change that is why we need redux.
// Since Props are immutabe(Read only), we have to use redux

// Alternatives for redux : 

/**
 * Akita
 * MobX
 * Flux
 * Hookstate
 * Recoil
 * Jotai
 * Rematch
 * Zustand
 */


/********************************************/
// Redux flow
/********************************************/

/*

React Component/Application =====> Dispatch an Action =====>
Redux [Action ===> Reducer ===> Store] ========> React View


1) ReactView ==>  Dispatch an Action
2) Action:  will invoke reducer
3) Reducer: will update/create a new store based on action type
4) Once store (even if it is muliple state) is updated it will reflect back in to React View.

*/


/********************************************/
// Install required packages
/********************************************/

/**
 * redux
 * react-redux
 * redux-dev-tools-extension
 */

/********************************************/
// Steps to install Redux 
/********************************************/

/**
 * npm install redux
 * npm install react-redux
 * npm install redux-devtools-extension
 * Install Chrome Extension
 */



/// work flow

// Dispatch a redux action

// what is an action?
// Action is a function,that returns an actionable object {}

// example 

let gmAction = () => {
    return {}
}

// how to dispatch an action?

// useDispatch() hook in functional component
// useDispatch() hook belongs to "react-redux" package



// action invokes reducer


// What is a Redux Reducer

// Reducer is a pure function,
// Pure function will not have side effects
// Reducer takes two arguements i.e initialState, action

// Reducer is going to update or create a store based on the action type

let messageReducer = (state, action) => {
    // update store/state based on the action type

}

// Store
// Store is a centralized object that contains the state of an application 

let store = createStore(messageReducer, composeWithDevTools());
export { store };


// Packages that we use in redux application

/** Packages
 * redux => createStore();
 * react-redux => Provider, useDispatch, useSelector
 * redux-devtools-extension => composeWithDevtools() -> to debug the redux store
 */


// useSelector is part for "react-redux" package
// It is used to access the store and get the values

let message = useSelector((state) => {
    return state.message;
});
{/* <h2>{message}<h2/> */ }
// The above code comes in the view level
















