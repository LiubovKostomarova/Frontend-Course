
import './App.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: ['Lead Software Engineer Contractor', 'Product Management Director', 'Engineering Director', 'Human Resources Director', 'Senior Partner Technology Manager', 'Staff User Experience Designer'],
  datasets: [
    {
      label: '# of Votes',
      data: [45, 30, 10, 5, 5, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function App() {
  return (
    <div className="App">
       <h1 id="header">Pie Chart</h1>
      <header className="App-header">
       <h1>Top 6 Salaries at Google</h1>
      <Pie data={data} />
      </header>
    </div>
  );
}

export default App;
