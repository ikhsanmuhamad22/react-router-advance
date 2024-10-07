import { Link, useParams } from 'react-router-dom';

export default function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>this is Event Detail page</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
}
