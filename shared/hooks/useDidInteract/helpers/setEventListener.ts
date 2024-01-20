const setEventListener = (
  operation: 'add' | 'remove',
  types: string[],
  event: () => void,
) => {
  for (const type of types) {
    document[`${operation}EventListener`](type, event);
  }
};
export default setEventListener;
