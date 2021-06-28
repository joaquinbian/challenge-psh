const getTime = () => {
  const today = new Date();
  const hours =
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
  const minutes =
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();

  const time = today.getHours() <= 12 && today.getHours() > 0 ? "AM" : "PM";

  return `${hours}:${minutes} ${time}`;
};

export default getTime;
