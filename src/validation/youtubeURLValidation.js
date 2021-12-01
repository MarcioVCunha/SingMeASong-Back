const validateYoutubeURL = (link) => {
  const rule = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  if (link.match(rule)) {
    return true;
  }
  return false;
};

export { validateYoutubeURL };