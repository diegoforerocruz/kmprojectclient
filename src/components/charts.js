import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Charts = (props) => {
  console.log(props)
  return (
    <div className="col-6">
    <BarChart
          width={750}
          height={400}
          data={props.data}
          margin={{
            top: 5,
            
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend verticalAlign="bottom" wrapperStyle={{ lineHeight: '40px' }} />
          <ReferenceLine y={0} stroke="#000" />
          <Brush dataKey="name" height={30} stroke="#8884d8" />
          <Bar dataKey="grupos" fill="#8884d8" />
          
        </BarChart>
        </div>
    
  )
}

export default Charts

