import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config/index';
import { User } from '../../modules/user/user.model';
import catchAsync from '../utils/catchAsync';

export const isAuthenticated = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Please login to access this resource',
    });
  }

  // token verify
  const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;

  // user check
  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User no longer exists',
    });
  }

  if (user.status === 'blocked') {
    return res.status(403).json({
      success: false,
      message: 'Your account is blocked',
    });
  }

  // req te user set kora
  (req as any).user = user;
  next();
});