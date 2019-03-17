module.exports = ({ name, slug }) => {
  let error = {};

  if (!name) {
    error.name = " you must provite name";
  }

  if (!slug) {
    error.slug = "you mush provite slug";
  }
  return {
    error,
    isValid: Object.keys(error).length === 0
  };
};
