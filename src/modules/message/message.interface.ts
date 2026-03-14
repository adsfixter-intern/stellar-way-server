export interface IMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'replied';
  date: Date;
}