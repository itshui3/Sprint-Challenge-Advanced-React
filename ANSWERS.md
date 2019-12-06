- [ ] Why would you use class component over function components (removing hooks from the question)?

If I need to hold local state or use lifecycle methods to perform actions and can't use hooks, I would use class components. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - occurs at the start of a component's lifecycle,       good for one time async actions that need to occur once component       renders

componentWillUnmount - occurs at the end of a component's lifecycle,      good for cleaning up side-effects

componentDidUpdate - occurs when state/props update, used to react to     user interaction or any other event/state/props change

- [ ] What is the purpose of a custom hook?

A custom hook can be written outside of a component with opinionated logic that a normal hook won't have. For example, writing hooks that return handlers that call stateSetter methods returned by useState to set a new input based on an identifier. This allows me to write one input object for an entire form and have inputs register into separate properties. This lets me write dry code by abstracting logic out of the component but also reusable code by giving it the ability to take on multiple tasks. 

- [ ] Why is it important to test our apps?

Because by automating testing, we can scale as well as go back to make changes with confidence from unit tests acting as a safety net. 