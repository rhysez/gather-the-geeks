import MeetupCardFull from "@/components/meetups/MeetupCardFull";
import { Meetup } from "@/lib/types";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { Rocket } from "lucide-react";

export default function Page() {
  const phMeetUp: Meetup = {
    title: "Cornwall Hackathon Winter 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices magna. Suspendisse eget felis ut orci scelerisque consectetur at ac diam. Etiam consectetur tincidunt nulla, non mattis ligula hendrerit sit amet. Curabitur molestie est nec nunc eleifend elementum. Aenean gravida turpis et maximus porttitor. Aliquam ut ex vestibulum, consequat erat eu, varius justo. Maecenas nulla mauris, tincidunt eget nisi at, finibus ultrices magna.",
    location: "Newquay, Cornwall UK",
    dateTime: new Date(),
    intendedFor: "Any",
    type: "Hackathon",
    numAttendees: 10,
    payableFee: 0,
    organiserName: "Rhys Hodgson",
    organiserId: "1"
  };

  const meetups = [
    phMeetUp,
    phMeetUp,
    phMeetUp,
    phMeetUp,
    phMeetUp,
    phMeetUp,
    phMeetUp,
  ];

  return (
    <main className="mt-24">
      <section className="mx-auto xl:w-1/2">
        <div className="flex gap-2 items-center">
            <RocketLaunchIcon className="w-8 h-8 text-sea_mist" />
            <h2 className="font-extrabold text-4xl text-sea_mist">
                discover meetups<span className="text-cherry_red">.</span>
            </h2>
        </div>
        <section className="space-y-4 mt-8">
          {meetups.map((meetup) => {
            return (
              <MeetupCardFull meetup={meetup} />
            );
          })}
        </section>
      </section>
    </main>
  );
}
