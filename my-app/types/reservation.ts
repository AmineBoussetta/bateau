export type Reservation = {
  boatName: string;
  name: string;
  phone: number;
  date: string; 
  time: string;
  guests: number;
  email: string;
  isValidEmail: boolean;
  message:string;
  isAccepted: boolean;
  sended: boolean;
}