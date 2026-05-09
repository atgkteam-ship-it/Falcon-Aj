export const saveMessages = async (messages) => {
  try {
    return true;
  } catch (error) {
    console.log(error);
  }
};

export const loadMessages = async () => {
  try {
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
