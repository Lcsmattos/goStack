import Appointment from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentDto from '../dtos/ICreateAppointmentDTO';

export default interface IAppoitmentsRepository {
  create(data: ICreateAppointmentDto): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
