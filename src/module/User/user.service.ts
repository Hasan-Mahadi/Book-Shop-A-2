import { TUser } from './user.interface';
import { User } from './user.model';

// Method:POST
const createUser = async (payload: TUser): Promise<TUser> => {
  const result = await User.create(payload);
  return result;
};

// FOR  PUT

const UpdateBook = async (id: string, data: TUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
  });

  return result;
};

// for  DELETE

const DeleteBook = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

// get User

const getUser = async () => {
  const result = await User.find();
  return result;
};

export const userService = {
  createUser,
  getUser,
  UpdateBook,
  DeleteBook,
};
