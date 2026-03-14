import { model, Schema } from "mongoose";
import { IGallery } from "./gallery.interface";

const gallerySchema = new Schema<IGallery>({
  image: { type: String, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: 'Category' },
  sortOrder: { type: Number, default: 0 }
});

export const Gallery = model<IGallery>('Gallery', gallerySchema);