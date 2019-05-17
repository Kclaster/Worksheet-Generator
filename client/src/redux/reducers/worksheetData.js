import {
  ADD_QUESTION_TO_WORKSHEETDATA,
  WORKSHEET_DATA
} from '../actions/types';

const initialState = {
  data: [],
  // loading: true,
  // expandedIds: [],
  displayAnswers: false
};

export default function worksheetData(state = initialState, action) {
  console.log('answer', action.payload);
  switch (action.type) {
    case WORKSHEET_DATA:
      return {
        ...state,
        data: [...state.data, ...action.payload]
      };
    case ADD_QUESTION_TO_WORKSHEETDATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
}
