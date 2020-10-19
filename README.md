# My React App on Glitch
## Assignment 2 for course *INFSCI 2560: Web Technologies & Standards*

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and built by webpack.

Try it out on [Glitch](https://project2-lil131.glitch.me/).

### 1. What framework did you pick and why?
I picked **React** because it is currently the most popular framework and has a lot of positive feedbacks among programmers, according to the statistics data from [stateofjs](https://2018.stateofjs.com/front-end-frameworks/overview/).

Besides, compared with Angular, React seems to be more **flexible**, since Angular has some restrictions on how the application should be structured.

What's more, React uses virtual DOM instead of regular DOM which makes it much **faster** than others. Because only the differences between the current HTML and the previous one will be inspected and updated.

### 2. What about that framework appealed to you, for this project?
I found that **JSX** is very convinient for coding. Since it is combines makeups and logics together, just by looking at the HTML-like syntax, I can easily imagine how the webpage will look like while I'm working on the logics. And thus the structure is so much clearer than vanilla JS.

Although the **one-way-binding method** of React is kind of complicated when I first learned it, it makes the application easier to maintain as the data can only flow downward so that the changes could not affect any parent structure.

React may not be the most efficient framework for small projects. But this project is a game which mainly relies on logics and interactions, I feel like React has made it easier to achieve.

### 3. What alternative frameworks did you consider?
I also considered **Angular** because it is created by Google and is also widely used. However, its feedback is not as good as React: according to [stateofjs](https://2018.stateofjs.com/front-end-frameworks/angular/), 33% of people used it, but would not use again.

### 4. What resources did you read/watch/listen to?
Before start, I read the [React official tutorial](https://reactjs.org/tutorial/tutorial.html) and the [step-by-step guide](https://reactjs.org/docs/hello-world.html).
I also went through the [Glitch React Starter Kit](https://glitch.com/culture/react-starter-kit/) and the [create-react-app-sample](https://glitch.com/~create-react-app-sample) on Glitch.


### 5. Describe your project. What does it do? What components or features of the framework did you explore for this project?
I developed a **webgame** which I found very interesting. 
It is a puzzle game. Pressing any of the squares will change the color of this square and all the adjacent ones as well. The goal is to change the entire board to blue, preferably in as few button presses as possible.

There is a status bar counting the player's progress, and also a button to reset the board.

I first saw this game [here](http://yanhaijing.com/inverter/). It is built with Grunt by [Yanghaijing](https://github.com/yanhaijing/inverter) using jQuary.
What I tried to do is to reproduce it with React. 

I decided to work on games because as a beginner I found it hard to handle the data flow in React and games usually involve a lot of data passing between components.
So I believe creating a game could give me a good chance to practice on that.

In this project, I used the reusable components with the `props` and `state`. 

I also used the built-in typechecking library **`PropTypes`** to make sure all the `props` passed from parent components are in correct types.
