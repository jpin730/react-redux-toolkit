import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPokemons } from "../store";

export const Pokemon = () => {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const onClickNext = () => {
    dispatch(getPokemons(page + 1));
  };

  const loadingMessage = (
    <>
      <h5 className="text-center">Loading...</h5>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated w-100"></div>
      </div>
    </>
  );

  const notFoundAlert = (
    <div className="alert alert-danger text-center">Pokemons not found</div>
  );

  const pokemonList = (
    <div className="alert alert-info text-center">
      {pokemons.map(({ name }) => name).join(", ")}
    </div>
  );

  return (
    <>
      <h2>Pokemon</h2>
      <hr />

      <div className="d-flex mb-3">
        <button
          className="btn btn-primary px-5 mx-auto"
          onClick={onClickNext}
          disabled={isLoading}
        >
          Next
        </button>
      </div>

      {isLoading && loadingMessage}

      {!isLoading && (pokemons.length > 0 ? pokemonList : notFoundAlert)}
    </>
  );
};
