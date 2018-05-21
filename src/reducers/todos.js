const initialState = [
  { content: '01001' },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state.splice(0).push({ content: action.content });
    default:
      return state;
  }
}

export default todos;