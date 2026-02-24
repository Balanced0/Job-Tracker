1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:

getElementById - we know id's are unique and cannot be duplicates. getElementbyId returns the element containing that particular id.

getElementsByClassName - there can be multiple classes with same name. getElementsByClassName returns all the elements(HTMLCollection) having the same class name.

querySelector - it accepts any css selector and returns only the first element. If there are multiple elemnets in the same group it will only return the first element.

querySelectorAll - Like querySelector it also accepts any css selector but it not only returns only the first element rather it returns a nodelist.

--------------------------------------------------------------------------------------------

2. How do you create and insert a new element into the DOM?

Ans:

To create a new element we can just use document.createElement() and to insert a new element into the DOM we can use .appendChild(), .prepend, etc. 

--------------------------------------------------------------------------------------------

3. What is Event Bubbling? And how does it work?

Ans: 

Event Bubbling is an event which starts from the targeted element and then gradually goes to its parents elements and all the way to the document.

Imagine we have a bucket filled with water and a mug inside of the bucket. Now when we create bubbles at the bottom of the mug the bubbles eventually rise upward all the way to the surface. Here, Event Bubbling works in a similar manner.

--------------------------------------------------------------------------------------------

4. What is Event Delegation in JavaScript? Why is it useful?

Ans:

Event Delegation is a technique in javacript where we do not need to use eventlisteners every time rather we can just add eventlistener to the parent and using the event bubbling it will just put a condition and apply the event only on the targeted child. It is useful because in this way we dont have to reuse codes.

--------------------------------------------------------------------------------------------

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:

preventDefault() - It stops the default characteristics of an element for a specific event.

stopPropagation() - It doesn't stop the default characteristics of the element but as the name suggests it stops the bubbling event propagation from reaching a child's parents.
