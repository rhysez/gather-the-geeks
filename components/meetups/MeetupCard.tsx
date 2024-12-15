import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
  
type MeetupCardProps = {
    title: string;
    description: string;
    location: string;
    developerType: string;
    meetupType: string;
}

export default function MeetupCard({
    title,
    description,
    location,
    developerType,
    meetupType
}: MeetupCardProps) {
    return (
        <Card className="w-fit bg-lighter_background">
            <CardHeader>
                <CardTitle className="text-2xl text-rose_red">{title}</CardTitle>
                <CardDescription>{description.slice(0, 40) + "..."}</CardDescription>
            </CardHeader>
            <CardContent className="flex-col items-start">
                <p>location: <span className="text-[#a78bfa]">{location}</span></p>
                <p>type: <span className="text-[#fdba74]">{meetupType}</span></p>
                <p>intended for: <span className="text-[#6ee7b7]">{developerType}</span></p>
            </CardContent>
            <CardFooter className="flex space-x-2">
                <Button className="bg-sea_mist hover:bg-rose_red hover:text-sea_mist">View</Button>
            </CardFooter>
        </Card>

    )
}