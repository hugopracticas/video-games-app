import { useDispatch, useSelector } from "react-redux";
import { getVideoGames  } from "../../store/slices/games/thunks";
import { useEffect } from "react";
import { Error, Loading } from "../ShareComponents";
import './ListGames.css';

export const ListGames = () => {
  const { games, isLoading, status, page, pageBack } = useSelector((state) => state.games);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoGames()); 
  }, []);

  return (
    <div>
      <div className="container-btn-next">
        <p
        onClick={ () => dispatch(getVideoGames(pageBack))} 
        className="btn-next">Previous</p>
        <p
        disabled={isLoading}
        onClick={ () => dispatch(getVideoGames(page)) } 
        className="btn-next">Next</p>
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : status !== 200 ? (
          <Error />
        ) : (
          <div>
            {games.map((game) => (
              <div>
                <p>{game.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
