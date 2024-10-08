import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';

export default function ErrorPage() {
  const error = useRouteError();
  let title = 'an error occurred!';
  let message = 'something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = 'not found';
    message = 'could not find resourse or page';
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
