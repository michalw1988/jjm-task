export const reducer = (state: object, action: {type: string, value: any}) => {
  switch (action.type) {
    case 'setFormSubmitted':
      return {
        ...state,
        formSubmitted: action.value
      }
    default:
      return state;
  }
}