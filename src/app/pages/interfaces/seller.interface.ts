import { Buyer } from "./buyer.interface";
import { Publication } from "./publication.interface";

export interface Seller extends Buyer {

	publicationList: Publication[];

}