import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./property";


@Entity()
export class PropertyPhotos{
    @PrimaryGeneratedColumn()
    photoId: number;

    @ManyToOne(() => Property, (Property) => Property.propertyPhotos)
    property: Property
}
