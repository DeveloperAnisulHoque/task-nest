import { Exclude } from "class-transformer";

export class ResponseUserDto {

    email: string;
    name: string
    
    @Exclude()
    password: string;
    profilePicture?: string;
    phoneNumber?: string;
    bio?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    dateOfBirth?: Date;
    createdAt: Date;
    updatedAt : Date;

}