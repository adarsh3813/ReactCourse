1.  We can have only one parent element in JSX

    Like: const jsx = <h1>Hello</h1><h2>World</h2>
    This is not valid, we need to wrap it into some parent, single parent
    Correct form: <div><h1>Hello</h1><h2>World</h2></div>

    To have two parents we can make a div like above, but this is ugly

2.  So react gives us React.Fragment

    It is a component which is exported by "React".
    usage: <React.Fragment/>
    It is like a empty tag

    When writing <React.Fragment> looked ugly, we replaced it with 
    <> and </>. This is same as above

    If you want to give style props to it, give it a name, like div
    
3.  You can give provide style to JSX elements as an object.

    const styleObj = {backgroundColor: "red"}
    const jsx = <div style={styleObj}></div

    You can direct replace styleObj with exact style object

4.  Concept: Config driven UI
5.  Optional Chaining
6.  Props, passing props to Components
7.  spread operator, object destructuruing, map

8.  VirtualDOM:
    Representation of DOM, like a tree. 
    Useful for reconciliation.

    Reconciliation- algo react uses to diff one tree from another (axtual DOM and virtual DOM), and it 
    determines, what needs to change and what deos not.
    Just re-renders that small part, and thus react is fast

    Use of keys: When there are multiple children of same type, and we add another, 
    then react uses keys to find which was added. it also helps in determining the new relative order of the children

9. Is index a valid key? Why not to use it?