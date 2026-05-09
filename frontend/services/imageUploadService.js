export const uploadImage = async (image) => {
  try {
    return {
      success: true,
      image,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
    };
  }
};
