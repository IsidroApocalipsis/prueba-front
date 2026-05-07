export const getTodayDate = () => {
  const today = new Date();

  return today.toISOString();
};
export const formatLongDate = (date) => {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};
