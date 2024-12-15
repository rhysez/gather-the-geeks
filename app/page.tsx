import MeetupCarousel from "@/components/home/MeetupCarousel";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const phMeetUp = {
    title: "Cornwall Hackathon Winter 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices magna. Suspendisse eget felis ut orci scelerisque consectetur at ac diam. Etiam consectetur tincidunt nulla, non mattis ligula hendrerit sit amet. Curabitur molestie est nec nunc eleifend elementum. Aenean gravida turpis et maximus porttitor. Aliquam ut ex vestibulum, consequat erat eu, varius justo. Maecenas nulla mauris, tincidunt eget nisi at, finibus ultrices magna.",
    location: "Newquay, Cornwall UK",
    intendedFor: "Any",
    type: "Hackathon"
  };
  
  const meetups = [phMeetUp, phMeetUp, phMeetUp, phMeetUp, phMeetUp, phMeetUp, phMeetUp]

  return (
    <main className="space-y-24 mt-24">
      <article className="space-y-2">
        <h1 className="text-center font-extrabold lg:text-5xl text-3xl">
          start meeting <span className="text-rose_red">like-minded</span>{" "}
          people<span className="text-cherry_red">.</span>
        </h1>
        <p className="text-center opacity-75 lg:text-xl md:text-base text-sm">
          gather the geeks helps you find and collaborate with other devs
          <span className="text-cherry_red">.</span>
        </p>
      </article>
      <section className="space-y-8">
        <p className="text-center text-lg">latest meetups posted on gtg...</p>
        <MeetupCarousel meetups={meetups} />
      </section>
      <section className="space-y-4">
        <h3 className="text-center font-extrabold lg:text-4xl md:text-3xl text-2xl">
            contribute to the project
            <span className="text-cherry_red">.</span>
        </h3>
        <p className="text-center">
            gather the geeks is a constant work-in-progress and i'd like to provide the best
            experience possible for my users.
        </p>
        <p className="text-center">
            therefore, i'm always welcoming of contributions to the official github repository. click the button below to head there.
        </p>
        <div className="flex justify-center">
            <Link className="bg-sea_mist rounded-full transition-all hover:bg-rose_red" href="https://github.com/rhysez/gather-the-geeks">
                <Image
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                    alt="github logo"
                    width={50}
                    height={50}
                />
            </Link>
        </div>
      </section>
    </main>
  );
}
