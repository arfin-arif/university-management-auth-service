import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    console.log(user)

    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'User created',
      data: result,
    })
  } catch (error) {
    console.error(error) // Log the error for debugging
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    })
  }
}

export default {
  createUser,
}
