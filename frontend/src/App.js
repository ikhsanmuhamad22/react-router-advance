// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active  DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage, { loader as eventLoader } from './pages/EventsPage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetailPage';
import NewEventPage, { action as newEventAction } from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/RootLayout';
import RootEventsLayout from './pages/RootEventsLayout';
import ErrorPage from './pages/ErrorPage';

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <RootEventsLayout />,
          children: [
            {
              index: true,
              element: <EventPage />,
              loader: eventLoader,
            },
            {
              path: ':eventId',
              loader: eventDetailLoader,
              id: 'event-detail',
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: 'edit',
                  element: <EditEventPage />,
                },
              ],
            },
            {
              path: 'new',
              element: <NewEventPage />,
              action: newEventAction,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
