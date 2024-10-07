import { Link } from 'react-router-dom';

const EVENTS = [
  {
    id: 'e1',
    name: 'event 1',
  },
  {
    id: 'e2',
    name: 'event 2',
  },
  {
    id: 'e3',
    name: 'event 3',
  },
  {
    id: 'e4',
    name: 'event 4',
  },
];

export default function EventPage() {
  return (
    <>
      <ul>
        {EVENTS.map((e) => {
          return (
            <li>
              <Link to={e.id}>{e.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
