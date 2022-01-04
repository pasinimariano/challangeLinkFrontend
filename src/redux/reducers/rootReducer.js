import { initialState } from "./initialState";
import {
  GET_POKEMONS,
  PAGINATION,
  SELECTION,
} from "../actions/actionsCreators";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        AllPokemons: action.payload,
      };
    case PAGINATION:
      return {
        ...state,
        PaginationPokemon: action.payload,
      };
    case SELECTION:
      return {
        ...state,
        SelectedPokemon: action.payload,
      };
    default:
      return state;
  }
};
