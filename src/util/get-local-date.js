export const getLocalDate = (date) => {
    const localDate = new Date(date);
    localDate.setHours(localDate.getHours() - localDate.getTimezoneOffset() / 60);
    return localDate.toISOString().split("T")[0];
  };