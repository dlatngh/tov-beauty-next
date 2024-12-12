import { ObjectId } from "mongodb";

export class Service {
  id!: string;
  serviceName: string;
  price: string;
  duration: string;
  description: string;
  imageUrl: string;

  constructor(
    serviceName: string,
    price: string,
    duration: string,
    description: string,
    imageUrl: string
  ) {
    this.generateId();
    this.serviceName = serviceName;
    this.price = price;
    this.duration = duration;
    this.description = description;
    this.imageUrl = imageUrl;
  }
  private generateId() {
    this.id = `s-${new ObjectId().toString()}`;
  }
}
