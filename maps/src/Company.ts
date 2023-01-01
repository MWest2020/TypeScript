import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";


export class Company implements Mappable {

    name: string;
    catchPhrase;
    location: {
        lng: number;
        lat: number;
    }
    

    constructor(){
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat : parseFloat(faker.address.latitude());
            lng : parseFloat(faker.address.longitude())

        }
    }

    markerContent(): string {
        return `The ${this.name} has been succesful since it started hiing dragons and gnomes...`
     }

}