import { ObjectId } from "mongodb";

export class Client {
  id!: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  upcomingAppointments?: string[];
  pastAppointments?: string[];
  ordersPlaced?: string[];

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string
  ) {
    this.generateId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phoneNumber;
  }

  private generateId() {
    this.id = `c-${new ObjectId().toString()}`;
  }

  private getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
