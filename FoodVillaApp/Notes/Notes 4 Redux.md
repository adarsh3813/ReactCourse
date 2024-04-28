- Redux is not mandatory, use only if needed. Another library for state management- Zustand
- Primary Use- handling state of app, app becomes easy to debug
- Redux Toolkit- makes writing redux easier

- In redux, we have one large object to store everything
- This object is partitioned into slices- each slice is a separated region
- We cannot modify a slice directly.
- In cart- when we click on Add- it 'dispathes an action', which 'calls a function (reducer)' and this
  function 'modifies the slice' of our redux store.
- Why all this complication-
- How can we read data from slice- We have a 'selector'- reads data from store
- This phenomenon is 'subscribing to the store' - means in-sync with our store
- See diagram to understand flow

* How to create a store- use configureStore(),
* How to creata a slice- createSlice({configuration})

  - configuration- name (of slice), initialValue (object), reducers (object, with action name as key)
  - functions inside actions- take state, action parameter

* How to fetch- Selector- useSelector hook. ex- useSelector((state) => state.cart.items)

  - How to dispatch- useDispatch hook.

* In vanilla redux-
  - mutating state directly was prohibited
  - we had to- create a copy of state make changes in the copy
  - In redux toolkit- we can mutate state directly
  - internally- rtk uses a library called immer- which allows us to mutate state directly
