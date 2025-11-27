import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';


export default function Chart({ appointments }) {

    return (
        <BarChart
            style={{ width: '100%', aspectRatio: 1.618, maxWidth: 1000, height: 300 }}
            responsive
            data={appointments}
            margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 0,
            }}
        >
            <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
            <Bar type="monotone" dataKey="fee" stroke="purple" strokeWidth={2} name="My data series name" />
            <XAxis dataKey="name" />
            <YAxis width="auto" label={{ value: '', position: 'insideLeft', angle: -90 }} />
            {/* <Legend align="right" /> */}
            <Tooltip />
        </BarChart>
    );
}