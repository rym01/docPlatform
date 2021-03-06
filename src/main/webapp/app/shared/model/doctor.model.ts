import { IRequest } from 'app/shared/model/request.model';

export interface IDoctor {
    id?: number;
    name?: string;
    cin?: number;
    address?: string;
    speciality?: string;
    email?: string;
    phoneNumber?: number;
    requests?: IRequest[];
}

export class Doctor implements IDoctor {
    constructor(
        public id?: number,
        public name?: string,
        public cin?: number,
        public address?: string,
        public speciality?: string,
        public email?: string,
        public phoneNumber?: number,
        public requests?: IRequest[]
    ) {}
}
