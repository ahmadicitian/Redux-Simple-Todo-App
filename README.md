This todo is build for the purpose of understanding the redux toolkit.
Here are brief answers to the questions related to Redux Toolkit:

### 1. **What is Redux Toolkit?**
Redux Toolkit is a standardized way of writing Redux logic. It simplifies Redux setup and development by providing 
pre-configured functions like `configureStore`, `createSlice`, and `createAsyncThunk`, which reduce boilerplate 
code and make managing state in applications easier.

### 2. **What is a Slice?**
A slice is a collection of Redux reducer logic and actions for a specific feature of your application. In Redux Toolkit, 
`createSlice` is used to define the initial state, actions, and reducers all in one place. Each slice represents part of 
the Redux state, like `todoSlice` for managing todo items.

### 3. **What is Store?**
The store in Redux is a centralized place where the entire application's state is stored. It holds the current state, 
allows dispatching actions to update the state, and makes the state available to the entire app through the `Provider`. 
Redux Toolkit simplifies store creation using `configureStore`.

### 4. **What is `useDispatch()`?**
`useDispatch()` is a hook provided by Redux to dispatch actions to the Redux store. It allows you to trigger state updates 
from React components. You use it to send actions like adding or deleting items in the app.

### 5. **What is `useSelector()`?**
`useSelector()` is a hook used to read or "select" data from the Redux store state. It takes a function that extracts a piece 
of the state and makes it available in a component. For example, you can use `useSelector` to get the list of todos stored in 
the state.

These are fundamental concepts in Redux Toolkit to manage state in your application.
