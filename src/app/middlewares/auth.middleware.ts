import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/index";
import { User } from "../../modules/user/user.model";
import catchAsync from "../utils/catchAsync";

// export const isAuthenticated = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

//   let token = req.cookies?.token;

//   if (!token && req.headers.authorization?.startsWith('Bearer')) {
//     token = req.headers.authorization.split(' ')[1];
//   }

//   if (!token) {
//     return res.status(401).json({
//       success: false,
//       message: 'Please login to access this resource',
//     });
//   }

//   try {

//     const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;

//     const userId = decoded.id || decoded._id;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: 'User no longer exists',
//       });
//     }

//     if (user.status === 'blocked') {
//       return res.status(403).json({
//         success: false,
//         message: 'Your account is blocked',
//       });
//     }

//     (req as any).user = user;

//     next();
//   } catch (error) {
//     return res.status(401).json({
//       success: false,
//       message: 'Invalid or expired token',
//     });
//   }
// });

export const isAuthenticated = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // ১. টোকেন খোঁজার লজিক আপডেট (একাধিক নাম চেক করবে)
    let token =
      req.cookies?.token ||
      req.cookies?.["next-auth.session-token"] ||
      req.cookies?.["__Secure-next-auth.session-token"];

    // ২. যদি কুকিতে না থাকে, তবে Authorization Header চেক করবে
    if (!token && req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login to access this resource",
      });
    }

    try {
      // ৩. টোকেন ভেরিফাই করা
      const decoded = jwt.verify(
        token,
        config.jwt_secret as string,
      ) as JwtPayload;

      // ৪. আইডি বের করা (সেশন টোকেন অনুযায়ী id অথবা _id হতে পারে)
      const userId = decoded.id || decoded._id || (decoded as any).sub;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User no longer exists",
        });
      }

      if (user.status === "blocked") {
        return res.status(403).json({
          success: false,
          message: "Your account is blocked",
        });
      }

      // ৫. রিকোয়েস্ট অবজেক্টে ইউজার ডাটা সেট করা
      (req as any).user = user;

      next();
    } catch (error) {
      console.error("JWT Verification Error:", error);
      return res.status(401).json({
        success: false,
        message: "Invalid or expired token",
      });
    }
  },
);
