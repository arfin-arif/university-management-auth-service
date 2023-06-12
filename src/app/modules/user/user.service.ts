import config from '../../../config/index';
import ApiError from '../../../errors/ApiErrors';
import { User } from './user.model';
import { IUser } from './user.interface';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  try {
    // Generate auto-incremental ID
    const id = await generateUserId();
    user.id = id;

    // Set default password if not provided
    if (!user.password) {
      user.password = config.default_user_pass as string;
    }

    const createdUser = await User.create(user);

    if (!createdUser) {
      throw new ApiError(400, 'Failed to create new user');
    }

    return createdUser;
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw error; // Rethrow the error to be caught in the controller
  }
};

export const UserService = {
  createUser,
};
