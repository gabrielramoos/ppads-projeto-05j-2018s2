import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chart = ({ data, isLow }) => {
  return (
    <Bar
      height={120}
      options={{
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }}
      data={{
        labels: data.map(c => c.label.substring(0,15)),
        datasets: [
          {
            label: isLow ? 'Quantidade de Pontos de Internet Reduzida' : 'Quantidade de Pontos com Conexão',
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#2b3787',
            borderColor: '#2b3787',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#2b3787',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#2b3787',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: data.map(c => c.quantity)
          }
        ]
      }}
    />
  )
}

export default Chart
