import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {Property} from './property'

@Entity()
export class Agent {
    @PrimaryGeneratedColumn()
    agentId: number;

    @Column()
    email: string;

    @Column()
    password: string

    @Column()
    firstName: string 

    @Column()
    lastName: string 

    @Column()
    companyName: string

    // One agent can have many properties
   @OneToMany(() => Property, property => property.agent)
   properties: Property[];


}
