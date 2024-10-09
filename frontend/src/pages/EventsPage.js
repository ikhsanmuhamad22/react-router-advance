import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

export default function EventPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'an error occured!' }; this is alternatif handling err but recommended handling bellow
    // throw new Response(
    //   JSON.stringify({ message: 'could not fetch the data.' }),
    //   { status: 500 }
    // );
    throw json({ message: 'could not fetch the data.' }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    events: loadEvents(),
  });
}
