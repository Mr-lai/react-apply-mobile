import { List } from 'antd-mobile';

import redCircle from '@/assets/redCircle.png';
import blueCircle from '@/assets/blueCircle.png';
import { useState } from 'react'
import classNames from 'classnames/bind'
import style from './index.module.scss';
const cla = classNames.bind(style)
const doubleModule = (props) => { 
  return (
    <div className={ cla('double-main')}>
    {props.lotteryArr.length>0 && props.lotteryArr.map((item,index) => { 
          return ( 
            <List.Item key={`${index}index`}>
              {/* <div className='lottery-index'>{index+1 }.</div> */}
              <div>
                <div className={ cla('title-text')}>红区:</div>
                <ul className={cla('double-red-item')}>
                  {item.red.length>0 && item.red.map((items,indexs) => {
                    return (
                      <li className={cla('lotteryNumContainer')} key={indexs+'index'}>
                      <img src={redCircle} alt="" />
                        <div className={ cla("lotteryNum")}>{ items}</div>
                      </li>
                    )
                  }) }
      
              </ul>
                <div className={ cla('title-text')}>篮区:</div>
                <ul className={cla('double-blue-item')}>
                { item.blue.length > 0 && item.blue.map((items, indexs) => {
                    return (
                      <li className={cla('lotteryNumContainer')} key={`${indexs}${items}`}>
                      <img src={ blueCircle} alt="" />
                        <div className={cla("lotteryNum") }>{ items}</div>
                  </li>
                    )
                  })
              }
            </ul>
             </div>
          </List.Item>
          )
        })}
  </div>
  )
}
export default doubleModule
