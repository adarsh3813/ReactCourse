1.  Higher order Component- is a function that takes a component and returns a component.
2.  HOC- acts like an enhancer for input component
3.  ex- promoted tag over restaurant. (input- restaurant card, out- restaurant with label)
4.  HOC- are pure functions, they donot modify the input component, they just enhance it.

5.  State Lifting- when i expand one show-item, other should collpase
    RestaurantCategory should not have individual state, RestaurantMenu should control this.
    It should pass state as prop
6.  Controlled/Uncontrolled Component- When RestaurantCategory had individual state, it was uncontrolled
    now when RestaurantMenu controls the state, it is controlled.
7.  For state lifting refer docs

8.  React is a one way data stream- flows from top to bottom
9.  Props-drilling- passing data to child comp, but it is also shared by intermediate components
    for problems of prop drilling refer doc
10. react context- avoids props drilling, global storage kind of.
    createContext() to create, useContext()- to use in functional comp.
    In class based- <UserContext.Consumer>{callback fn}</UserContext.Consumer>, callback fn like- (data)=>console.log(data),
    here 'data' is our data
11. To set context data elsewhere we use- <UserContext.Provider value={newValue}>. Wrap it around component
    where you to want to make it global
    ex: <UserContext.Provider value={newUsername}>
    <ChildComponent1 />
    <ChildComponent2 />
    </UserContext.Provider>
12. Another way to update- pass the set method of state variable into context
