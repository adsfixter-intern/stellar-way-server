import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { FaqServices } from './faq.service';

const createFaq = catchAsync(async (req, res) => {
  const result = await FaqServices.createFaqIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'FAQ created successfully',
    data: result,
  });
});

// const getAllFaqs = catchAsync(async (req, res) => {
//   const result = await FaqServices.getAllFaqsFromDB();

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'FAQs fetched successfully',
//     data: result,
//   });
// });

export const FaqControllers = {
  createFaq,
//   getAllFaqs,
};