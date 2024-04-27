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
