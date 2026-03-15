import { Request, Response } from 'express';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { Gallery } from './gallery.model';
import { UploadService } from '../upload/upload.service'; 

const createGalleryItem = catchAsync(async (req: Request, res: Response) => {
  const { categoryId, sortOrder } = req.body;
  
  const fileData = UploadService.processSingleFile(req.file as Express.Multer.File);

  if (!fileData) {
    throw new Error('Image file is required!');
  }

  const result = await Gallery.create({
    image: fileData.url, 
    categoryId,
    sortOrder: sortOrder || 0,
  });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Gallery item created successfully!',
    data: result,
  });
});
const getAllGalleryItems = catchAsync(async (req: Request, res: Response) => {
  const result = await Gallery.find()
    .populate('categoryId') 
    .sort({ sortOrder: 1, createdAt: -1 });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Gallery items fetched successfully!',
    data: result,
  });
});

const deleteGalleryItem = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const item = await Gallery.findById(id);
  if (!item) {
    throw new Error('Item not found!');
  }

  // ১. ইউআরএল থেকে শুধু ফাইলের নাম বের করা
  const urlParts = item.image.split('/');
  const fileNameWithExtension = urlParts[urlParts.length - 1]; // যেমন: image.jpg
  const fileName = fileNameWithExtension.split('.')[0]; // যেমন: image

  // ২. যদি আপনার ক্লাউডিনারি কনফিগারে কোনো ফোল্ডার দেওয়া থাকে (যেমন: 'gallery')
  // আপনার ক্লাউডিনারি ড্যাশবোর্ডে গিয়ে দেখুন ইমেজটি কোন ফোল্ডারে আছে। 
  // যদি ফোল্ডারে থাকে তবে এভাবে লিখুন: const publicId = `your_folder_name/${fileName}`;
  // আর যদি কোনো ফোল্ডার না থাকে, তবে নিচেরটিই ঠিক আছে:
  const publicId = fileName; 

  if (publicId) {
    // এখানে আমরা try-catch ব্যবহার করব যাতে ক্লাউডিনারি থেকে ডিলিট না হলেও DB থেকে ডিলিট হয়
    try {
      await UploadService.deleteImageFromCloudinary(publicId);
    } catch (error) {
      console.log('Cloudinary delete failed, skipping to DB deletion...');
    }
  }

  await Gallery.findByIdAndDelete(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Gallery item deleted successfully!',
    data: null,
  });
});

export const GalleryControllers = {
  createGalleryItem,
  getAllGalleryItems,
  deleteGalleryItem,
};