import { Category } from "./category.interface";
import { Order } from "./order.interface";

export interface Publication {
	id: number;
	description: string;
	date: Date;
	nameOfProduct: string;
	emailOfSeller: string;
	pathsOfPicture: Array<String>;
	availableAmount: number;
	location: string;
	listOfOrders: Array<Order>;
	categories: Array<Category>;
	userId: number; // <-- Falta por mostrar en el frontend de publicacion
	user_name: string;
}
