Welcome to my Tic-Tac-Toe game!

// Technologies used:

This web app was built using a combination of Javascript and jQuery. Some aspects of styling were achieved through Bootstrap. I separated my Javascript into two separate files: one for UI and one for logic. I originally wrote all functions in one file, and while sifting through my code to organize / modularize it, I learned quite a bit about both the principle of separation of concerns and why it's better to do this as you go along!

// My approach / user story:

A user is able to play against a friend sitting next to them. When a user wants to start a new game, they can either click the New Game button to play while not logged in, or they can log in / register at the top of the page (this has not been fully implemented, but the user experience aspect of it has been built out; i.e. the user can click Log In and see only the appropriate fields / buttons, etc.).

The user (player 1) is asked if they want to be X or O. Their decision is stored in a variable, and the players aren't asked again which letter they'd like to be (unless they refresh the page). Either player 1 or player 2 is then randomly chosen to go first (this random selection occurs at the beginning of each round).

The game then begins - users are notified whose turn it is at any given time in the left message box. When either player 1 wins, player 2 wins, or a tie occurs, the game ends. The win / tie counter on the right is updated accordingly.

// Unsolved problems:

 I planned on including artificial intelligence that would allow a user to play against the machine, which would informedly make decisions about where next to move, but ran out of time! The logic would have looked something like this:

    - If two out of three cells in 0-2, 3-5, 6-8, 0-3-6, 1-4-7, 2-5-8, 0-4-8, or 2-4-6 are occupied by two of the same player (either by player or by computer), computer should occupy the third, unoccupied cell.
    - If only one of the cells in any cell combination is occupied, or if no cells have been occupied yet, the computer should occupy the middle cell.
    - If the middle cell is already occupied, and only one cell in any of the cell combinations is occupied by the computer, the computer should move into a corresponding corner cell.
    - Else: move into a corner cell. Move clockwise around the board to choose cell.

Due to time constraints, I was also unable to implement a modal (which would appear after clicking New Game -- it would ask you to register / log in, ask whether you'd like to be X or O, ask who you'd like to play against, etc.) or any animations / waits, all of which I would have loved to have accomplished.

http://kristenlk.github.io/tic-tac-toe/
