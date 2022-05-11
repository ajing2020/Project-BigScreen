import React from 'react'

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>单数</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4}>互联网行业</td>
          <td>Java开发工程师</td>
          <td>10</td>
          <td rowSpan={4}>80</td>
        </tr>
        <tr>
          <td>UI设计师</td>
          <td>20</td>
        </tr>
        <tr>
          <td>前端开发</td>
          <td>20</td>
        </tr>
        <tr>
          <td>产品经理</td>
          <td>30</td>
        </tr>
        <tr>
          <td rowSpan={2}>农林行业</td>
          <td>施工员</td>
          <td>22</td>
          <td rowSpan={2}>44</td>
        </tr>
        <tr>
          <td>花艺师</td>
          <td>22</td>
        </tr>
        <tr>
          <td rowSpan={3}>科学技术</td>
          <td>细胞培养员</td>
          <td>40</td>
          <td rowSpan={3}>68</td>
        </tr>
        <tr>
          <td>工艺开发员</td>
          <td>22</td>
        </tr>
        <tr>
          <td>有机合成员</td>
          <td>45</td>
        </tr>
      </tbody>
    </table>
  )
}
