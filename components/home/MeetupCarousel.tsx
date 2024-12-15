import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import MeetupCard from "../meetups/MeetupCard"  

type MeetupCarouselProps = {meetups: any[]}

export default function MeetupCarousel({meetups}: MeetupCarouselProps) {
    return (
        <Carousel>
            <CarouselContent>
                {
                    meetups.map(meetup => {
                        return (
                            <CarouselItem className="basis-1/3">
                                <MeetupCard
                                    key={meetup.title}
                                    title={meetup.title}
                                    description={meetup.description}
                                    location={meetup.location}
                                    developerType={meetup.developerType}
                                    meetupType={meetup.meetupType}
                                />
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    )
}