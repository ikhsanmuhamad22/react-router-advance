import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export default function NewEventPage() {
  return <EventForm />;
}

export async function action({ request, params }) {
  const data = await request.formData();
  const newEvent = {
    title: data.get('title'),
    date: data.get('date'),
    image: data.get('image'),
    description: data.get('description'),
  };

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newEvent),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'could not create new evnet' }, { status: 500 });
  }

  return redirect('/events');
}
