import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
        

function LineDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        
        const data = {
            labels: ['2025-05-01', '2025-05-10', '2025-05-20', '2025-06-01'],
            datasets: [
                {
                    label: 'Bông Brazil (kg)',
                    data: [55000, 53000, 51000, 50000],
                    fill: false,
                    borderColor: '#7C83FD',
                    backgroundColor: '#7C83FD',
                    pointBorderColor: '#7C83FD',
                    pointBackgroundColor: '#fff',
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    tension: 0.2
                },
                {
                    label: 'Bông Úc (kg)',
                    data: [48000, 47000, 46000, 45000],
                    fill: false,
                    borderColor: '#4ADE80',
                    backgroundColor: '#4ADE80',
                    pointBorderColor: '#4ADE80',
                    pointBackgroundColor: '#fff',
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    tension: 0.2
                },
                {
                    label: 'Bông Mỹ (kg)',
                    data: [40000, 38000, 36000, 35000],
                    fill: false,
                    borderColor: '#FDBA74',
                    backgroundColor: '#FDBA74',
                    pointBorderColor: '#FDBA74',
                    pointBackgroundColor: '#fff',
                    pointRadius: 8,
                    pointHoverRadius: 10,
                    tension: 0.2
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#6B7280',
                        font: {
                            family: 'inherit',
                            size: 14,
                            weight: 'bold'
                        },
                        usePointStyle: true,
                        padding: 20
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: '#fff',
                    borderColor: '#e5e7eb',
                    borderWidth: 1,
                    titleColor: '#111827',
                    titleFont: { weight: 'bold', size: 16 },
                    bodyColor: '#111827',
                    bodyFont: { size: 14 },
                    callbacks: {
                        title: (items) => items[0].label,
                        label: (item) => {
                            return [
                                `${item.dataset.label} : ${item.formattedValue}`,
                            ];
                        },
                        labelTextColor: (context) => {
                            if (context.dataset.label === 'Bông Brazil (kg)') return '#7C83FD';
                            if (context.dataset.label === 'Bông Úc (kg)') return '#4ADE80';
                            if (context.dataset.label === 'Bông Mỹ (kg)') return '#FDBA74';
                            return '#111827';
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: false
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            size: 13
                        }
                    },
                    grid: {
                        color: '#E5E7EB'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Số lượng (kg)',
                        color: '#6B7280',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    ticks: {
                        color: '#6B7280',
                        font: {
                            size: 13
                        }
                    },
                    grid: {
                        color: '#E5E7EB'
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card" style={{ background: '#fff', borderRadius: 12, padding: 24 }}>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}

export default LineDemo;