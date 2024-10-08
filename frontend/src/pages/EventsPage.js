import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

export default function EventPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'an error occured!' }; this is alternatif handling err but recommended handling bellow
    // throw new Response(
    //   JSON.stringify({ message: 'could not fetch the data.' }),
    //   { status: 500 }
    // );
    throw json({ message: 'could not fetch the data.' }, { status: 500 });
  } else {
    return response;
  }
}
