import axios from "axios";
import { setGames, startLoadingGames } from "./gamesSlices"


export const getVideoGames = ( page = 1, pageBack = 1 ) => {
  return async( dispatch, getState ) => {
    dispatch( startLoadingGames() );

    const response = await axios({
      url: `https://api.rawg.io/api/games?key=877ee5b7e1244b89b95ef40fdc69638e&page=${ page || pageBack }`,
      method: 'GET'
    })
    const {data, status} = response;
    const { results } = data
    console.log(results)
    console.log(status)

    dispatch(setGames({ games: results, status: status, page: page + 1, pageBack: pageBack - 1 }))

  }
}

