import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import SideNav from './components/sideNav/sideNav';
import TopNav from './components/topNav/topNav';
import ListView from './pages/listView/listView';
import Schedule from './pages/schedule/schedule';
import { Routes, Route } from "react-router-dom";
import ScheduleClub from './pages/scheduleClub/scheduleClub';
import ScheduleLineView from './pages/schedule_lineView/Schedule_LineView';
import CalenderSchedule from './pages/calenderSchedule/calenderSchedule';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='page'>
          <SideNav />
        <div className='content'>
          <TopNav />
          {/* <ListView /> */}
          <Routes>
            <Route path="/" element={<ScheduleClub />} />
            <Route path="talento-club" element={<Schedule />} />
            <Route path="week-view" element={<CalenderSchedule />} />
            <Route path="schedule-club" element={<ScheduleClub />} />
            <Route path="list-view" element={<ListView />} />
            <Route path="line-view" element={<ScheduleLineView />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
