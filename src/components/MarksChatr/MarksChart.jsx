import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {


    const marksDataRes=use(marksPromise)
    const marksData=marksDataRes.data

    const marksChartData=marksData.map(studentData=>{
        const student={
            id:studentData.student_id,
            name:studentData.name,
            physics:studentData.marks.physics,
            chemistry:studentData.marks.chemistry,
            math:studentData.marks.math
        }

        const avg=(student.physics+student.chemistry+student.math)/3;
        student.avg=avg;
        return student
    })
    console.log(marksChartData);
    return (
        <div>
            <BarChart width={500} height={400} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
<Bar dataKey="avg" fill='yellow'></Bar>
<Bar dataKey="chemistry" fill='blue'></Bar>
<Bar dataKey="physics" fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;