## A Small Frontend Assignment

1. **api.js** - For fetching the data from the API.
2. **useFetchData** - For storing the data fetched from the API.
3. **App.jsx** - Uses useFetchData and passes props for grouping, sorting, and Kanban.
4. **KanbanBoard.jsx** - Receives tickets, users, sorting, and grouping options and displays them in columns.
5. **groupTickets.js** - Groups the tickets based on users, status, or priority.
6. **sortTickets.js** - Sorts by priority (High to Low) or title (in ascending order).
7. **TicketCard.jsx** - Displays the necessary information on a ticket.
8. **SortSelector.jsx/GroupSelector.jsx** - Allows the user to choose from the options for grouping or sorting.
9. **localStorage.js** - Holds the value and data set by the user to keep it the same after reload.
10. **DropDownMenu.jsx** - For the Drop down button to select the grouping/sorting 