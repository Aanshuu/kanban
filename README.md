A Small Frontend Assignment

1. api.js - for fetching the data from the api
2. useFetchData - for storing the data fetched from the api
3. App.jsx - Uses UseFetchData and passes props for grouping, sorting, and kanban
4. KanbanBoard.jsx - Receives tickets, users, sorting and grouping options and displays it in columns
5. groupTickets.js - Groups the tickets based on users, status or priority
6. sortTickets.js - Sorts by priority(High to Low) or title(in ascending order)
7. TicketCard.jsx - Displays the necessary information on a ticket
8. SortSelector.jsx/GroupSelector.jsx - Allows the user to choose from the options for grouping or sorting
9. localStorage.js - Holds the value and data set by user to keep it same after reload.