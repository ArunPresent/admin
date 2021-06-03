import { GLOBALTYPES } from "../actions/globalTypes";

const initialState = {
  school: [],
  student:[],
  posts:[],
  ads:[],
  skills:[],
  interest:[],
  schools:[],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.SCHOOL:
      return {
        ...state,
        school: action.payload,
      };
      case GLOBALTYPES.STUDENT:
      return {
        ...state,
        student: action.payload,
      };
      case GLOBALTYPES.POSTS:
        return {
          ...state,
          posts: action.payload,
        };
        case GLOBALTYPES.SHOWADS:
          return {
            ...state,
            ads: action.payload,
          };
          case GLOBALTYPES.SHOWSKILLS:
            return {
              ...state,
              skills: action.payload,
            };
    default:
      return state;
  }
};

export default listReducer;
