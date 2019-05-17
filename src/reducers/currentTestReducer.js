import constants from "../constants";
const { initialState, types } = constants;

const currentTestReducer = (state = initialState.currentTest, action) => {
  let newFactsArray;
  let newCurrentTestSlice;
  switch (action.type) {
    case types.INITIALIZE_STATE:
      return state;

    case types.NEXT_FACT_INDEX:
      state.factIndex++;
      return state;

    case types.SAVE_ANSWER:
      newFactsArray = state.facts.slice();
      newFactsArray[state.factIndex].answer = action.answer;
      newCurrentTestSlice = Object.assign({}, state, {facts: newFactsArray});         
      return newCurrentTestSlice;

      
    //   const newArrayPosition = state[action.currentSongId].arrayPosition + 1;
    //   newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
    //     arrayPosition: newArrayPosition
    //   });
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.currentSongId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;

    // case types.RESTART_SONG:
    //   newSongsByIdEntry = Object.assign({}, state[action.currentSongId], {
    //     arrayPosition: 0
    //   });
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.currentSongId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;
    // case types.REQUEST_SONG:
    //   newSongsByIdEntry = {
    //     isFetching: true,
    //     title: action.title,
    //     songId: action.songId
    //   };
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.songId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;
    // case types.RECEIVE_SONG:
    //   newSongsByIdEntry = Object.assign({}, state[action.songId], {
    //     isFetching: false,
    //     receivedAt: action.receivedAt,
    //     title: action.title,
    //     artist: action.artist,
    //     songArray: action.songArray,
    //     arrayPosition: 0,
    //     songId: action.songId
    //   });
    //   newSongsByIdStateSlice = Object.assign({}, state, {
    //     [action.songId]: newSongsByIdEntry
    //   });
    //   return newSongsByIdStateSlice;
    default:
      return state;
  }
};

export default currentTestReducer;