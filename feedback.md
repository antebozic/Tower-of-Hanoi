# Project Feedback + Evaluation

| Score | Expectations |
|   --- | ---          |
|     0 | Incomplete   |
|     1 | Progressing  |
|     2 | Performing   |
|     3 | Excelling    |

## Deployment:

> Did you successfully deploy your project to github pages? Is the app's functionality the same deployed as it is locally?

Your Score: 3

Great to see your project up on GitHub Pages. What did you think of working with branches and deploying?

## Technical Requirements:

> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

Your Score: 2

Great job on your game! To give this a 3, I would have like to see more commits than just 3 and to see you try at some of the bonus features. That said, what you've delivered here is very good!

## Code Quality:

> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code?

Your Score: 2

Your code quality is overall pretty good. I think I've suggested this before, but be careful to make your indentation and spacing consistent and even. I've reformatted your HTML and CSS to show you what I mean. This may not seem important, but it is! Many teams will have formatting and style guides that you'll need to follow as a developer.

Here are some other tips for you:
* consider reading about BEM, a naming convention for CSS classes. I recommend [this](https://css-tricks.com/bem-101/) and [this](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) article to get you started.
* Consider ordering your CSS properties. Generally, you'll want any element selectors (like `body`, `nav`, `main`, `header`, etc) at the very top of your CSS. You can look in to [SMACSS](https://smacss.com/) as a good method for architecting your CSS.
* I like that you're using a wrapper class, one you'll see a lot and could consider is this:
```css
.wrapper {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}
```
* Did you consider trying to make the game responsive? That could be a good bonus challenge if you have time!
* Your JS could be cleaned up a bit so that it's not all inside of one callback function. Instead, I recommend trying to break it out into multiple different functions based on task. Maybe one to determine if a move is a valid move, another to move a disc from one tower to another, another to check the conditions of whether the player has won or not, etc.
* You want to minimize the number of times you call jQuery with `$()` - each time you do, jQuery goes to the DOM to look up the Node and create a big jQuery object. This is a bad practice for that reason. Instead, what you'll often see is something like `$this = $(this)` at the very beginning of the function.
* again - be careful with your formatting! It looks like your formatting and indentation is off in your JS
* Remove any commented out code or `console.log()` statements

## Creativity/Interface:

> Is your user interface easy to use and understand? Does it make sense for the problem you're solving? Does your interface demonstrate creative design?

Your Score: 3

Your user interface is great! I love how clean and minimal it is and that you added in a way of showing which disc is currently selected by moving it to up when it's selected - very nice touch!
