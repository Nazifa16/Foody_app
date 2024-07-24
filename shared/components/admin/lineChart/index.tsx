import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DataItem {
    name: string
    uv: number
    pv: number
}

const data: DataItem[] = [
    { name: 'Page A', uv: 4000, pv: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800 },
    { name: 'Page F', uv: 2390, pv: 3800 },
    { name: 'Page G', uv: 3490, pv: 4300 },
]

const LineChartComponent: React.FC = () => {
    const [chartDimensions, setChartDimensions] = useState({
        width: '100%',
        height: 400,
    })

    const updateChartDimensions = () => {
        const width = window.innerWidth
        if (width < 768) {
            setChartDimensions({ width: '100%', height: 300 })
        } else if (width < 1024) {
            setChartDimensions({ width: '100%', height: 350 })
        } else {
            setChartDimensions({ width: '100%', height: 400 })
        }
    }

    useEffect(() => {
        updateChartDimensions()
        window.addEventListener('resize', updateChartDimensions)
        return () => {
            window.removeEventListener('resize', updateChartDimensions)
        }
    }, [])

    return (
        <div className="flex flex-col items-start bg-admin-secondary p-4 rounded-lg shadow-lg w-[90%] max-w-[800px] h-[400px]">
            <h2 className="text-xl font-semibold mb-4 text-admin-text">Sales Data</h2>
            <div className="w-full h-full">
                <ResponsiveContainer width={chartDimensions.width} height={chartDimensions.height}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default LineChartComponent
