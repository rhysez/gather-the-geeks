import MeetupCarousel from "@/components/home/MeetupCarousel";

export default async function Page() {
  const phMeetUp = {
    title: "Cornwall Hackathon Winter 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ultrices magna. Suspendisse eget felis ut orci scelerisque consectetur at ac diam. Etiam consectetur tincidunt nulla, non mattis ligula hendrerit sit amet. Curabitur molestie est nec nunc eleifend elementum. Aenean gravida turpis et maximus porttitor. Aliquam ut ex vestibulum, consequat erat eu, varius justo. Maecenas nulla mauris, tincidunt eget nisi at, finibus ultrices magna.",
    location: "Newquay, Cornwall UK",
    developerType: "Any",
    meetupType: "Hackathon"
  };
  
  const meetups = [phMeetUp, phMeetUp, phMeetUp, phMeetUp, phMeetUp, phMeetUp, phMeetUp]

  return (
    <main>
      <article className="space-y-2">
        <h1 className="text-center font-extrabold lg:text-5xl md:text-3xl text-2xl">
          start meeting <span className="text-rose_red">like-minded</span>{" "}
          people<span className="text-cherry_red">.</span>
        </h1>
        <p className="text-center opacity-75 lg:text-xl md:text-base text-sm">
          gather the geeks helps you find and collaborate with other devs
          <span className="text-cherry_red">.</span>
        </p>
      </article>
      <section className="mt-24 space-y-8">
        <p className="text-center text-lg">latest meetups posted on gtg...</p>
        <MeetupCarousel meetups={meetups} />
      </section>
    </main>
  );
}
