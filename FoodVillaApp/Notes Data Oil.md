1. Higher order Component- is a function that takes a component and returns a component.
2. HOC- acts like an enhancer for input component
3. ex- promoted tag over restaurant. (input- restaurant card, out- restaurant with label)
4. HOC- are pure functions, they donot modify the input component, they just enhance it.

5. State Lifting- when i expand one show-item, other should collpase
   RestaurantCategory should not have individual state, RestaurantMenu should control this.
   It should pass state as prop
6. Controlled/Uncontrolled Component- When RestaurantCategory had individual state, it was uncontrolled
   now when RestaurantMenu controls the state, it is controlled.
