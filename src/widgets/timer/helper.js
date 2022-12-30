export const getTime = (time) => {
  if (String(time).length === 1) {
    return `0${String(time)}`;
  }

  return String(time);
};

