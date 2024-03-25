import { Tabs,List } from 'antd-mobile';
import './index.scss'
import '@/style/index.scss';
import title from '@/assets/title.png'
import Union from './components/union';
import { useState } from 'react'
import redCircle from '@/assets/redCircle.png';
import blueCircle from '@/assets/blueCircle.png';
import store from '@/store';
console.log(store);
const Home = () => {
  const [tabsValue, setTabsValue] = useState('union')
  const [lotteryArr, setLotteryArr] = useState([])
  const [lotteryDoubleArr, setLotteryDoubleArr] = useState([])
  return (
    <div>
      <div className="home-title">
        <img src={title} alt="" />
        <span className="home-text">祝君 <span className='text-in'>中</span> 大奖</span>
       </div>
        <Tabs onChange={value => {
          setTabsValue(value)
        }}>
          <Tabs.Tab title='双色球' key='union'>
          双色球自助选号
          <Union value={tabsValue} setLotteryArr={setLotteryArr} setLotteryDoubleArr={ setLotteryDoubleArr} />
          {lotteryArr.length>0 && lotteryArr.map((item,index) => { 
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
          </Tabs.Tab>
          <Tabs.Tab title='大乐透' key='lotto' >
          大乐透
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
          </Tabs.Tab>
          <Tabs.Tab title='快乐8' key='eight'>
          快乐8
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
          </Tabs.Tab>
          <Tabs.Tab title='七乐彩' key='seven'>
          七乐彩
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
          </Tabs.Tab>
          <Tabs.Tab title='3D' key='three'>
          3D
          <List.Item>1</List.Item>
          <List.Item>2</List.Item>
          <List.Item>3</List.Item>
          </Tabs.Tab>
        </Tabs>
      </div>
  )
}
 
export default Home
