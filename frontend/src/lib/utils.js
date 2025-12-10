export const getDifficultyBadgeClass = (difficulty) => {
  switch (difficulty.toLowerCase()) {
    case "easy":
      return "badge-success";
    case "medium":
      return "badge-warning";
    case "break":
      return "badge-error";
    default:
      return "badge-ghost";
  }
};