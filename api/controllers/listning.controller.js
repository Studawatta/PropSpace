export const createListning = async (req, res, next) => {
  try {
    const listning = await Listning.create;
  } catch (error) {
    next(error);
  }
};
