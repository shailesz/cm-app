import axios from "axios";

export const getContacts = async () => {
  const url = "http://localhost:4000/contacts";

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
