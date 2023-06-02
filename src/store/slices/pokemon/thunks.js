import { pokemonApi } from "../../../api";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  const limit = 10;

  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    try {
      const { data } = await pokemonApi(
        `/pokemon?limit=${limit}&offset=${page * limit}`
      );
      dispatch(setPokemons({ page, pokemons: data.results }));
    } catch (error) {
      dispatch(setPokemons({ page, pokemons: [] }));
    }
  };
};
