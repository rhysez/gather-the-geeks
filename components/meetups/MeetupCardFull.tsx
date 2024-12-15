import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { DateTime } from "luxon";
import { Meetup } from "@/lib/types";
import {
  GlobeEuropeAfricaIcon,
  UserGroupIcon,
  BanknotesIcon,
  CalendarDaysIcon,
  UserIcon,
  Square2StackIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export default function MeetupCardFull({ meetup }: { meetup: Meetup }) {
  return (
    <Card className="bg-lighter_background">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl text-rose_red">
            {meetup.title}
          </CardTitle>
          <div className="flex gap-1 items-center">
            <CalendarDaysIcon className="w-5 h-5 text-sea_mist" />
            <p className="font-bold text-sea_mist">
              {DateTime.fromJSDate(meetup.dateTime).toLocaleString(
                DateTime.DATETIME_MED
              )}
            </p>
          </div>
        </div>
        <CardDescription>
          {meetup.description.slice(0, 80) + "..."}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 auto-rows-auto">
        <div>
          <div className="flex gap-1 items-center">
            <GlobeEuropeAfricaIcon className="w-5 h-5 text-sea_mist" />
            <p className="text-sea_mist">
              location:{" "}
              <span className="text-[#a78bfa]">{meetup.location}</span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Square2StackIcon className="w-5 h-5 text-sea_mist" />
            <p className="text-sea_mist">
              type: <span className="text-[#fdba74]">{meetup.type}</span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <StarIcon className="w-5 h-5 text-sea_mist" />
            <p className="text-sea_mist">
              for: <span className="text-[#6ee7b7]">{meetup.intendedFor}</span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-1 items-center">
            <UserGroupIcon className="w-5 h-5 text-sea_mist" />
            <p className="text-sea_mist">
              attendees:{" "}
              <span className="text-[#a78bfa]">{meetup.numAttendees}</span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <UserIcon className="w-5 h-5 text-sea_mist" />
            <p className="text-sea_mist">
              organiser:{" "}
              <span className="text-[#fdba74]">{meetup.organiserName}</span>
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <BanknotesIcon className="w-5 h-5 text-sea_mist" />
            <p className="text-sea_mist">
              cost:{" "}
              <span className="text-[#6ee7b7]">
                {meetup.payableFee ? meetup.payableFee : "Free"}
              </span>
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex space-x-2">
        <Button className="bg-sea_mist hover:bg-slate-200">View</Button>
      </CardFooter>
    </Card>
  );
}
