import axios from "axios";

const ApiKey = "3f5b56339f8fdbdc01e08aed47d34ac9";

const getData = async (city) => {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${ApiKey}`
  );
  return data['data'];
};

export const ApiModule = {
  getData,
};
