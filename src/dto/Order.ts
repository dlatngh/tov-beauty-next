import { ObjectId } from "mongodb";
import { OrderStatus } from "../enums/OrderStatus";

export class Order {
  id!: string;
  clientId: string;
  orderDate: Date;
  productList: string[];
  status: OrderStatus;
  additionalNotes: string;
  constructor(
    clientId: string,
    orderDate: Date,
    productList: string[],
    additionalNotes: string
  ) {
    this.generateId();
    this.clientId = clientId;
    this.orderDate = orderDate;
    this.productList = productList;
    this.status = OrderStatus.PENDING;
    this.additionalNotes = additionalNotes;
  }

  private generateId() {
    this.id = `o-${new ObjectId().toString()}`;
  }
}
