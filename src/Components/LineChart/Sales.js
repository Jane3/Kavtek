// Sales component to gnerate the line graph
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import './Sales.css';
import { format } from "date-fns";

function LineChart() {
    const url = 'https://6155a05293e3550017b08b11.mockapi.io/sales';
    const [chartData, setChartData] = useState({});
    
    const chart = () => {
        let SalesPri =[];
        let SalesTime =[];

        axios.get(`${url}`)
        .then(res => {
            //console.log(res.data)
            for(const dataLine of res.data){
                SalesPri.push(parseInt(dataLine.price));
                SalesTime.push(format(new Date(dataLine.createdAt), "H:mma"))
            }
            console.log(SalesTime);
            setChartData({
                labels: SalesTime,
                datasets:[
                {
                    label: 'Total Sales',
                    data: SalesPri,
                    backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                    borderWidth: 4
                }
                ]
            });
        })
        .catch(err => {
            console.log(err);
        })
    };

    useEffect(()=> {
        //By using this Hook, you tell React that your component needs to do something after render
        //after url changes, the code in the useEffect() will run/ re-run
        chart();
        
    }, [url])

   return (
       <div className='LineChart'>
           {/* <ul>
               {
                   sales.map(sale => (
                        <li key={sale.id}>{sale.price}</li>
                   ))}
           </ul> */}
                <Line
                data={chartData}
                options={{
                    responsive: true,
                    title: { text: "THICCNESS SCALE", display: true },
                    scales: {
                    yAxes: [
                        {
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                        }
                    ],
                    xAxes: [
                        {
                        gridLines: {
                            display: false
                        }
                        }
                    ]
                    }
                }}
                />
       </div>
   )  
}

export default LineChart; 