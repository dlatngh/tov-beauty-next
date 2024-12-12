import { ObjectId } from "mongodb";

export class Review {
  id!: string;
  name: string;
  review: string;
  date: Date;
  constructor(name: string, review: string, date: Date) {
    this.generateId();
    this.name = name;
    this.review = review;
    this.date = date;
  }
  private generateId() {
    this.id = `r-${new ObjectId().toString()}`;
  }
}
