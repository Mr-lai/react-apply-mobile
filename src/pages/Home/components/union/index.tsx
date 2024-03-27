import { Stepper,Button,Radio,Space,List } from 'antd-mobile';
import { useState } from 'react'
import classNames from 'classnames/bind'
import style from './index.module.scss';
import KillNumber from '../killNumber/index';
import redCircle from '@/assets/redCircle.png';
import blueCircle from '@/assets/blueCircle.png';
import { handleConventionArr ,handleDoubleArr} from '@/hook/index';
const cla = classNames.bind(style)
const Union = (props) => {
  const [inpValue, setInpValue] = useState('')
  const [inpValue1, setInpValue1] = useState('')
  // 常规注数
  const [stepperValue, setStepperValue] = useState(1)
  const [radioValue, setRadioValue] = useState('rule')
  const [redDouble,setRedDouble] = useState(6)
  const [blueDouble, setblueDouble] = useState(1)
  const [lotteryArr, setLotteryArr] = useState([])
  const [killBlueObj, setKillBlueObj] = useState(
    {
      value: '蓝区杀号',
      arr: [],
      id:'blue'
    }
  )
  const [killRedObj, setKillRedObj] = useState(
    {
      value: '红区杀号',
      arr: [],
      id:'red'
    }
  )

  const automaticSelection =async (type) => {
    if (type === 'rule') {
      const ruleArr = await handleConventionArr(killBlueObj.arr, killRedObj.arr, props.value, radioValue, stepperValue)
     setLotteryArr(ruleArr)
    } else { 
      const doubleArr = await handleDoubleArr(killBlueObj.arr, killRedObj.arr, props.value, radioValue, redDouble,blueDouble) 
      setLotteryArr(doubleArr)
    }
  }

  return (
    <div className={ cla('union') }>
      <Radio.Group defaultValue='rule' onChange={value => { 
        setRadioValue(`${value}`)
        setInpValue('')
        setInpValue1('')
        setLotteryArr([])
        setStepperValue(1)
      }}>
          <Space direction='vertical'>
            <Radio value='rule'>常规</Radio>
            <Radio value='double'>复式</Radio>
          </Space>
      </Radio.Group>
      <KillNumber killObj={killRedObj} inpValue={inpValue} setInpValue={ setInpValue} setKillObj={ setKillRedObj } />
      <KillNumber killObj={killBlueObj} inpValue={inpValue1} setInpValue={ setInpValue1} setKillObj={ setKillBlueObj } />
    {
        radioValue === 'rule' && <div>

              <div className='machine-selection'>
                    <span>机选常规</span>
                      <Stepper
                        defaultValue={1}
                        min={0}
                        value={stepperValue }
                        onChange={value => {
                          setStepperValue(value)
                        }}
                      />
                      <span className='machine-unit'>注</span>
                      <Button color='danger' size='mini' fill='solid'
                        onClick={() => {
                          automaticSelection('rule')
                        }}
                      >
                          开始机选
                    </Button>
                    <Button color='warning' size='mini' fill='solid'
                        onClick={() => {
                            setLotteryArr([])
                            setStepperValue(1)
                      }}>清除</Button>
              </div>
              <div>
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
              </div>
        </div>
        
        
    }
    {
       radioValue==='double'  && <div >
        <div>机选复试</div>
        <div className='machine-double'>
          <div>
          <span>红区</span>
          <Stepper
          defaultValue={1}
          min={0}
          value={redDouble }
          onChange={value => {
            setRedDouble(value)
          }}
          />
          <span className='machine-unit'>位</span>
          </div>
          <div>
          <span>蓝区</span>
            <Stepper
            defaultValue={1}
            min={0}
            value={blueDouble }
            onChange={value => {
              setblueDouble(value)
            }}
            />
            <span className='machine-unit'>位</span>
          </div>
            <div className={ cla('double-btn') }>
                 
            <Button color='danger' size='small' fill='solid'
                            onClick={() => {
                              automaticSelection('double')
                            }}
                          >
                          开始机选
              </Button>
            <Button color='warning' size='small' fill='solid'    onClick={() => {
                           setLotteryArr([])
                           setStepperValue(1)
                          }}>清除</Button>
          </div>
          </div>
          <div className={ cla('double-main')}>
            {lotteryArr.length>0 && lotteryArr.map((item,index) => { 
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
      </div>
      }
</div>
  )
}

export default Union
