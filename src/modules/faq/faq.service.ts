import { IFaq } from './faq.interface';
import { Faq } from './faq.model';

const createFaqIntoDB = async (payload: IFaq) => {
  const result = await Faq.create(payload);
  return result;
};

// const getAllFaqsFromDB = async () => {
//   const result = await Faq.find();
//   return result;
// };

export const FaqServices = {
  createFaqIntoDB,
//   getAllFaqsFromDB,
};