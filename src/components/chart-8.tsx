import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import { createEchartsOptions } from '../shared/create-echarts-options'
import { px } from '../shared/px'

export const Chart8 = () => {
  const divRef = useRef(null)
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA']
  useEffect(() => {
    var myChart = echarts.init(divRef.current)
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inside',
              textStyle: { color: 'white', fontSize: px(20) },
              formatter(options) {
                return (options.value * 100).toFixed(0) + '%'
              }
            },
            labelLine: { show: false },
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: px(4)
            },
            data: [
              { value: 0.07, name: '20' },
              { value: 0.1, name: '21' },
              { value: 0.23, name: '22' },
              { value: 0.28, name: '23' },
              { value: 0.32, name: '24' }
            ]
          }
        ]
      })
    )
  }, [])

  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef} />
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        20
        <span style={{ background: colors[1] }} />
        21
        <span style={{ background: colors[2] }} />
        22
        <span style={{ background: colors[3] }} />
        23
        <span style={{ background: colors[4] }} />
        24
      </div>
    </div>
  )
}
