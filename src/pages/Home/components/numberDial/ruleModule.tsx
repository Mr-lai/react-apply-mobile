
import { List } from 'antd-mobile';

import redCircle from '@/assets/redCircle.png';
import blueCircle from '@/assets/blueCircle.png';
// import { useState } from 'react'
// import classNames from 'classnames/bind'
// import style from './index.module.scss';
// const cla = classNames.bind(style)
const ruleModule = (props) => {
  return (
    <div>
    {props.lotteryArr.length>0 && props.lotteryArr.map((item,index) => { 
          return ( 
            <List.Item key={`${index}index`}>
              <div className='lottery-index'>{index+1 }.</div>
              <ul className="red-item">
                  {item.red.length>0 && item.red.map((items,indexs) => {
                    return (
                      <li className='lotteryNumContainer redLottery' key={indexs+'index'}>
                      <img src={redCircle} alt="" />
                        <div className="lotteryNum">{ items}</div>
                      </li>
                    )
                  }) }
      
              </ul>
            <ul className="blu-item">
                { item.blue.length > 0 && item.blue.map((items, indexs) => {
                    return (
                      <li className="lotteryNumContainer" key={`${indexs}${items}`}>
                      <img src={ blueCircle} alt="" />
                        <div className="lotteryNum lotteryNumBlue">{ items}</div>
                  </li>
                    )
                  })
              }
            </ul>
          </List.Item>
          )
    })}
  </div>
  )
}
export default ruleModule
