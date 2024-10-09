import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  const Fetcher = useFetcher();
  const { data, state } = Fetcher;

  console.log(state);
  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.confirm(data.message);
    }
  }, [data, state]);

  return (
    <Fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </Fetcher.Form>
  );
}

export default NewsletterSignup;
