import { ObjectId } from "mongodb";
import { Client } from "./Client";

export class Appointment {
  id!: string;
  clientId: string;
  serviceId: string;
  appointmentDate: Date;
  additionalNotes?: string;
  constructor(
    clientId: string,
    serviceId: string,
    appointmentDate: Date,
    additionalNotes: string
  ) {
    this.generateId();
    this.clientId = clientId;
    this.serviceId = serviceId;
    this.appointmentDate = appointmentDate;
    this.additionalNotes = additionalNotes;
  }

  private generateId() {
    this.id = `a-${new ObjectId().toString()}`;
  }
}
