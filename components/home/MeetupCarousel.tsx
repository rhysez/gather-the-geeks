'use client'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import MeetupCardCompact from "../meetups/MeetupCardCompact"
import Autoplay from "embla-carousel-autoplay"

type MeetupCarouselProps = {meetups: any[]}

export default function MeetupCarousel({meetups}: MeetupCarouselProps) {
    return (
        <Carousel 
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                delay: 3000,
                }),
            ]}>
            <CarouselContent className="hover:cursor-grab active:cursor-grabbing">
                {
                    meetups.map(meetup => {
                        return (
                            <CarouselItem className="lg:basis-1/4 md:basis-1/2 basis-1/1">
                                <MeetupCardCompact
                                    key={meetup.title}
                                    title={meetup.title}
                                    description={meetup.description}
                                    location={meetup.location}
                                    intendedFor={meetup.intendedFor}
                                    type={meetup.type}
                                    displayOnly={true}
                                />
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    )
}