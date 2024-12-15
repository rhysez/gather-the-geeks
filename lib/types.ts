export type Meetup = {
    title: string;
    description: string;
    location: string;
    dateTime: Date;
    intendedFor: string; // The intended developer type, e.g. Web dev
    type: string; // The nature of the meet, e.g. Hackathon
    numAttendees: number; // The number of people attending the meetup.
    payableFee: number; // The payable fee required to access the meetup.
    organiserName: string; // The name of the organiser (company or individual).
    organiserId: string; // The organiser's ID in the db. 
}