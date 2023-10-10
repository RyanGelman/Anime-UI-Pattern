Tabbed Interface with API Data Loading
This JavaScript code implements a tabbed interface for displaying information about an anime series. It uses the Jikan API to fetch data about the anime and displays it in different tabs.

How it Works
The code consists of several functions:

openTab(tabName): This function is responsible for managing the behavior of the tabbed interface. It hides and displays tab content, marks the active tab button, and fetches data from the Jikan API based on the selected tab.

fetchDataForTab1(): Fetches and displays overview data for the anime, including title, score, episodes, and synopsis.

fetchDataForTab2(): Fetches and displays character information for the anime, including images and names.

fetchDataForTab3(): Fetches and displays episode information for the anime, including episode titles and scores.

The default tab opened when the page loads is "Overview."

