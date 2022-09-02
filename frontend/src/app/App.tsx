import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom'

import Outcomes from './pages/Outcomes'
import { getCurrentYearMonth } from './utils/date.utils'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/outcomes/:yearMonth">
          <Outcomes />
        </Route>
        <Redirect to={{ pathname: `/outcomes/${getCurrentYearMonth()}` }} />
      </Switch>
    </Router>
  )
}
