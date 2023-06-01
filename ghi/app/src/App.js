// import './bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import MainPage from './MainPage';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import PresentationForm from './PresentationForm';
import AttendConferenceForm from './AttendConferenceForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>




function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="attendees">
            <Route index element={<AttendeesList attendees={props.attendees} />} />
            <Route path="new" element={<AttendConferenceForm />} />
          </Route>
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
