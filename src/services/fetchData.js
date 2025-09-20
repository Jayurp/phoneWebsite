import api from "./interceptor";

export const fetchNewPhones = async () => {
    try {
        const response = await api.get("/phoneList/newPhone");
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchCpo = async () => {
  try {
    const response = await api.get("/phoneList/cpo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAsisPlus = async () => {
  try {
    const response = await api.get("/phoneList/asis-plus");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAsis = async () => {
  try {
    const response = await api.get("/phoneList/asis");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};