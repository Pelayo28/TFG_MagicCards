import { Order } from "./order.interface";
import { User } from "./user.interface";

export interface Buyer extends User {

	description: string;
	pathProfilePicture: string;
	orderList: Order[];
}