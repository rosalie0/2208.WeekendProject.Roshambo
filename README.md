For this weeks homework we’ll keep it tiny and just expand the homework from last weekend to include a piece of leaderboardSlice redux state to hold our information from the DB:

## LeaderboardSlice

- Change our leaderboard to be powered by redux instead of using local state
- Includes an array called allPlayers containing all players usernames
- Includes an object called selectedPlayer holding a single selected players information (including all games played by them)
- Includes three actions within the Reducer:
  - setAllPlayers - sets the array of all players to be the payload its given (which is an array of players)
  - setSelectedPlayer - sets the currently selected player to be the payload its given (which is an object for a single player)
  - EXTRA CREDIT: addPlayer - adds a brand new player to the allPlayers array
- Set the state within our new reducer using the API endpoints
- Remove and replace the state in our /leaderboard and /leaderboard/:playerId routes with state from the new reducer
