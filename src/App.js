import './App.css';
import LineChart from './Components/LineChart/Sales.js';
import UserChart from './Components/UserTable/UsersChart.js';
import Sidebar from './Components/Sidebar.js';
import Profile from './Components/ProfileCard/Profile.js';


function App() {
  return (
    <div className="App">
      <Profile/>

      <div className = "ChartCard">
        <LineChart />
        <UserChart />
        <Sidebar />
      </div>
    </div>
      
      
      
      

  );
}

export default App;
