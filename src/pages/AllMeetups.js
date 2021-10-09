import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "1",
    title: "First Meetup",
    image:
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    address: "Meetup City",
    descriptn: "This is a first meetup description",
  },
  {
    id: "2",
    title: "Second Meetup",
    image:
      "https://images.unsplash.com/1/bag-and-hands.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1166&q=80",
    address: "Class City",
    descriptn: "This is a second meetup description",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
