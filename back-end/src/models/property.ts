import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Agent } from "./agent";
import { PropertyPhotos } from "./propertyPhotos";

enum PropertyTypes {
    SINGLE = "single",
    DOUBLE = "double"
}

@Entity()
export class Property{
    @PrimaryGeneratedColumn()
    propertyId: number;

    @Column()
    address: string

    @Column()
    price: number

    @Column({
        type: "enum",
        enum: PropertyTypes,
        default: PropertyTypes.SINGLE
    })
    role: PropertyTypes

    @Column()
    description: string; 

    @Column()
    numberOfBedrooms: number

    @Column()
    numberofBathrooms: number;

    @Column()
    listingDate: Date;

    @Column()
    isAvaliable: boolean

    // ManyToOne relationship with Agent
    @ManyToOne(() => Agent, agent => agent.properties)
    @JoinColumn()
    agent: Agent;

    @OneToMany(() => PropertyPhotos, (propertyPhoto) => propertyPhoto.property)
    propertyPhotos: PropertyPhotos[]


   
}