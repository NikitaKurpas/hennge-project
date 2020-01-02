For this project, I've decided to use the `Create React App` starter kit along with `Styled-Components` CSS-in-JS library.
`CRA` is an obvious and easy choice for bootstrapping React projects, and `Styled-Components` provide very rapid UI prototyping experience, better than SCSS or CSS modules.

Originally I wanted to use the same HTML markup for both desktop and mobile views, but, seeing how different they are, I've decided to implement 2 separate markups for desktop and mobile and switch to mobile using JavaScript at <800px device width. I've achieved this with a custom `useMedia` React hook which is listening to provided media query changes. As for my CSS, whenever I had to use media queries, I've decided to go with the mobile-first approach.

Using styled-components' `css` prop, I've quickly prototyped and perfected the UI and then extracted these styles to named components to make the code much more maintainable and understandable. Then, as files grew bigger, I've separated big chunks of UI and functionality into different files. 

After the main prototype was completed, I moved on to part 2 of the challenge - implementing the detailed Email view. Since the requirement was to allow users to inspect multiple emails at once, I've decided to go with the expandable rows approach - where when you click on a row, it would expand the details and would allow you to click on multiple rows. As for the view itself, I've decided to stick with a table layout that would look good on both mobile and desktop and wasn't time-consuming to implement.

Because I didn't know whether I need to implement the date range filtering or not, I've decided to overdeliver and implement a custom, albeit rudimentary, Calendar component. I've used common UX practices for Calendar components, like resetting the range when the user clicks on the calendar if the range is already selected. Then, using this component, I've implemented date range filtering of the records.

Results: a fully functioning prototype of an Email inspection system with ordering and date filtering.
