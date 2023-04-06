import React, { useEffect } from 'react'
import NavbarMenu from '../components/NavbarMenu'
import { useState } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import DashBoardItem from '../components/DashBoardItem'
import Chart from 'react-apexcharts'
import "../styles/dashBoard.css"
const AdminPage = () => {
    const [currentFilterItem, setDataFilterItem] = useState("All");
    const [currentFilterDay, setDataFilterDay] = useState("Today");
    useEffect(() => {
        document.querySelectorAll('li').forEach(item => item?.classList.remove("current-filter-item"))
        document.querySelectorAll('li').forEach(item => item?.classList.remove("current-filter-day"))
        document.querySelectorAll('li').forEach(item => item.innerHTML === currentFilterItem ? item.classList.add('current-filter-item') : null)
        document.querySelectorAll('li').forEach(item => item.innerHTML === currentFilterDay ? item.classList.add('current-filter-day') : null)
    })

    const mixed = {
        series: [{
            name: "Income",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: 'Export',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        },
        {
            name: 'Order',
            data: [54, 52, 83, 42, 33, 62, 12, 2, 60, 8, 51, 10]
        },
        {
            name: "Import",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'smooth',
            dashArray: [0, 8, 5]
        },
        title: {
            text: 'All',
            align: 'left',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: undefined,
                color: 'white'
            },

        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ],
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + " (VND)"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " VND"
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " Orders";
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + " VND";
                        }
                    }
                },
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    };


    const options = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            },
        },
        stroke: {

            curve: 'smooth',

        },
        series: [{
            name: currentFilterItem && currentFilterItem,
            data: currentFilterItem === 'Income' ? [30, 40, 35, 50, 49, 60, 70, 91, 125, 10, 50, 62]
                :
                currentFilterItem === 'Export' ? [47, 98, 18, 61, 5, 54, 22, 81, 55, 16, 38, 12]
                    :
                    currentFilterItem === 'Order' ? [93, 13, 33, 11, 75, 69, 61, 65, 10, 43, 53, 32]
                        :
                        currentFilterItem === 'Import' ? [65, 87, 62, 33, 66, 59, 64, 13, 53, 29, 81, 2] : null
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
            ],
            labels: {
                style: {
                    colors: 'white',
                    fontSize: '12px',
                    fontFamily: 'Helvetica, Arial, sans-serif',
                    fontWeight: 400,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        title: {
            text: currentFilterItem && currentFilterItem,
            align: 'left',
            style: {
                fontSize: '14px',
                fontWeight: 'bold',
                fontFamily: undefined,
                color: 'white'
            },
        },
    }

    const circleChart = {
        labels: ['Progress'],
        series: [70]
    }

    return (
        <div style={{ display: "flex" }} >
            <NavbarMenu isAdmin={true} currentManagePage={'Dashboard'} position={"vertical"}></NavbarMenu>
            <div style={{ backgroundColor: "#1f1f1f", width: "100%", marginLeft: "220px", overflow: "hidden" }}>
                <h4 className='p-3' style={{ textAlign: "center", borderBottom: "1px solid #979797", color: "white" }}>Dashboard</h4>
                <h2 className='p-3' style={{ textAlign: "left", marginLeft: "50px", color: "white", marginTop: "24px" }}>Total</h2>
                <Row className='mt-4'>
                    <Col className='faj-center' lg={4} style={{ color: "white" }} >
                        <DashBoardItem title={"Export"} data={9999}></DashBoardItem>
                    </Col>
                    <Col className='faj-center' lg={4} style={{ color: "white" }} >
                        <DashBoardItem title={"Orders"} data={9999}></DashBoardItem>
                    </Col>
                    <Col className='faj-center' lg={4} style={{ color: "white" }} >
                        <DashBoardItem title={"Import"} data={9999}></DashBoardItem>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} style={{ marginTop: "60px", display: "flex", justifyContent: "space-around" }}>
                        <ul className='p-4 m-4 mt-4 ' style={{ color: "white", display: "flex" }}>
                            <li onClick={() => setDataFilterItem("All")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>All</li>
                            <li onClick={() => setDataFilterItem("Income")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Income</li>
                            <li onClick={() => setDataFilterItem("Export")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Export</li>
                            <li onClick={() => setDataFilterItem("Order")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Order</li>
                            <li onClick={() => setDataFilterItem("Import")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Import</li>
                        </ul>
                        <ul className='p-4 m-4 mt-4' style={{ color: "white", display: "flex" }}>
                            <li onClick={() => setDataFilterDay("Today")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Today</li>
                            <li onClick={() => setDataFilterDay("Month")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Month</li>
                            <li onClick={() => setDataFilterDay("Year")} className='p-2 m-2' style={{ borderRadius: "15px", backgroundColor: "#222e3c", minWidth: "100px", textAlign: "center", fontWeight: "bold", border: "2px solid white" }}>Year</li>
                        </ul>
                    </Col>
                </Row>
                {currentFilterItem !== "All" && <Row className='faj-center' style={{}}>
                    <Col lg={6} style={{ marginLeft: "5px" }}>
                        <div>
                            <Chart options={options} series={options.series} type="line" height={500} />
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div>
                            <Chart options={circleChart} series={circleChart.series} type="radialBar" height={500} />
                        </div>
                    </Col>
                </Row>}
                {currentFilterItem === "All" && <Row className='faj-center' style={{ marginTop: "96px" }}>
                    <Col lg={10}>
                        <div id="income-chart">
                            <Chart options={mixed} series={mixed.series} type="line" height={500} />
                        </div>
                    </Col>
                </Row>}

            </div>
        </div >

    )
}

export default AdminPage