import { Types } from "mongoose";

export interface IGallery {
  image: string;
  categoryId: Types.ObjectId;
  sortOrder: number;
}