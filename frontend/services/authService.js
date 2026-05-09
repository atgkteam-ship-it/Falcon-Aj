export const loginWithGoogle = async () => {
  try {
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const logoutUser = async () => {
  try {
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
