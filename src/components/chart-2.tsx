import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { px } from '../shared/px'
import { baseEchartOptions } from '../shared/base-echart-options'
import { createEchartsOptions } from '../shared/create-echarts-options'

export const Chart2 = () => {
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [
    { name: '薪酬福利', 2011: 2, 2012: 3 },
    { name: '工作时间', 2011: 2, 2012: 3 },
    { name: '能够学习知识', 2011: 2, 2012: 3 },
    { name: '公司前景好', 2011: 2, 2012: 3 },
    { name: '平等尊重', 2011: 2, 2012: 3 },
    { name: '兴趣至上', 2011: 2, 2012: 3 },
    { name: '落户政策', 2011: 2, 2012: 3 },
    { name: '专业对口', 2011: 2, 2012: 3 },
    { name: '稳定', 2011: 2, 2012: 3 }
  ]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: '薪酬福利', 2011: 2, 2012: Math.random() * 10 },
        { name: '工作时间', 2011: 2, 2012: 3 },
        { name: '能够学习知识', 2011: 2, 2012: 3 },
        { name: '公司前景好', 2011: 2, 2012: 3 },
        { name: '平等尊重', 2011: 2, 2012: 3 },
        { name: '兴趣至上', 2011: 2, 2012: 3 },
        { name: '落户政策', 2011: 2, 2012: 3 },
        { name: '专业对口', 2011: 2, 2012: 3 },
        { name: '稳定', 2011: 2, 2012: 3 }
      ]
      x(newData)
    }, 1000)
  }, [])
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false }
        },
        yAxis: {
          axisTick: { show: false },
          type: 'category',
          data: data.map((i) => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace('公安局', '\n公安局')
            }
          }
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: data.map((i) => i[2011]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#2034F9'
                  },
                  {
                    offset: 1,
                    color: '#04A1FF'
                  }
                ])
              }
            }
          },
          {
            name: '2012年',
            type: 'bar',
            data: data.map((i) => i[2012]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#B92AE8'
                  },
                  {
                    offset: 1,
                    color: '#6773E7'
                  }
                ])
              }
            }
          }
        ]
      })
    )
  }
  useEffect(() => {
    myChart.current = echarts.init(divRef.current)
    x(data)
  }, [])

  return (
    <div className="bordered 破获排名">
      <h2>学生求职看重因素</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 男生
        <span className="second" /> 女生
      </div>
    </div>
  )
}
