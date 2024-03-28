import { Tabs,List } from 'antd-mobile';
import './index.scss'
import '@/style/index.scss';
import title from '@/assets/title.png'
import Union from './components/union';
import { useState } from 'react'
import store from '@/store';
console.log(store);
const Home = () => {
  const [tabsValue, setTabsValue] = useState('union')
  const [redDouble,setRedDouble] = useState(6)
  const [blueDouble, setBlueDouble] = useState(1)
  return (
    <div>
      <div className="home-title">
        <img src={title} alt="" />
        <span className="home-text">祝君 <span className='text-in'>中</span> 大奖</span>
       </div>
        <Tabs onChange={value => {
        setTabsValue(value)
          if (value==='lotto') {
            setRedDouble(5)
            setBlueDouble(2)
          }
        }}>
          <Tabs.Tab title='双色球' key='union'>
          双色球自助选号
          <Union value={tabsValue} redDouble={redDouble} blueDouble={blueDouble} setRedDouble={setRedDouble} setBlueDouble={ setBlueDouble } />
          </Tabs.Tab>
          <Tabs.Tab title='大乐透' key='lotto' >
          大乐透自助选号
          <Union value={tabsValue} redDouble={redDouble} blueDouble={blueDouble} setRedDouble={setRedDouble} setBlueDouble={ setBlueDouble } />
          </Tabs.Tab>
          <Tabs.Tab title='快乐8' key='eight'>
          快乐8
          <List.Item>敬请期待</List.Item>

          </Tabs.Tab>
          <Tabs.Tab title='七乐彩' key='seven'>
          七乐彩
          <List.Item>敬请期待</List.Item>

          </Tabs.Tab>
          <Tabs.Tab title='3D' key='three'>
          3D
          <List.Item>敬请期待</List.Item>

          </Tabs.Tab>
        </Tabs>
      </div>
  )
}
 
export default Home
