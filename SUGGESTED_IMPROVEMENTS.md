Here is a list of my suggested improvements to the original design:

- [UX] A search bar may be added to allow for easy searching for emails and advanced filtering capabilities (such as in Gmail)
- [UI] Ditch table design in favor of list approach - display only the sender, subject, and date of an email. This will make the UI cleaner.
- If sticking to table design:
  - [UX] Allow columns to be resized - this will allow the user to see the most relevant info to them
  - [UX] Allow different other columns to be added/removed - this will allow the user to see the most relevant info to them
- [UI] Remove additional recipients counter - it's useless and doesnt give much info.

And here are additional improvements that can be made to the actual implementation:
 
- [UI/UX] Calendar design and UX can be improved
  - [UI] Use better shadows
  - [UX] Hide the calendar when clicked/tapped outside of it - it is expected from a popup to work like this
  - [UI/UX] Mark start and end dates of interval differently to better show the user when the interval starts and ends
  - [UI/UX] Better design for calendar controls - use unified borders, colors, and other styles
  - [UI] Mark the sides of the calendar if the interval extends to previous/next month
- [UI/UX] Email detail view design can be improved
  - Hide Cc/Bcc under expandable options
  - Add icons for different attachment types and display them in the bottom
