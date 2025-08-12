import { Router } from 'preact-router';
import Home from '../pages/Home';

export function Routes() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}
