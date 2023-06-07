export interface Order {
	orderId: number;
	publicationId: number;
	sellerId: number;
	buyerId: number;
	purchasedAmount: number;
	state: string;
}
