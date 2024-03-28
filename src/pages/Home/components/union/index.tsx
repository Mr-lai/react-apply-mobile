import { Stepper,Button,Radio,Space } from 'antd-mobile';
import { useState } from 'react'
import classNames from 'classnames/bind'
import style from './index.module.scss';
// import redCircle from '@/assets/redCircle.png';
// import blueCircle from '@/assets/blueCircle.png';
import KillNumber from '../killNumber/index';
import { handleConventionArr, handleDoubleArr } from '@/hook/index';
import  RuleModule  from '@/pages/Home/components/numberDial/ruleModule';
import  DoubleModule from '@/pages/Home/components/numberDial/doubleModule';
const cla = classNames.bind(style)

const Union = (props) => {
  const [inpValue, setInpValue] = useState('')
  const [inpValue1, setInpValue1] = useState('')
  // 常规注数
  const [stepperValue, setStepperValue] = useState(1)
  const [radioValue, setRadioValue] = useState('rule')
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

  const automaticSelection =async (type:string) => {
    if (type === 'rule') {
      const ruleArr = await handleConventionArr(killBlueObj.arr, killRedObj.arr, props.value, stepperValue)
     setLotteryArr(ruleArr)
    } else { 
      const doubleArr = await handleDoubleArr(killBlueObj.arr, killRedObj.arr, props.value, props.redDouble,props.blueDouble) 
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
      <KillNumber killObj={killBlueObj} inpValue={inpValue1} setInpValue={setInpValue1} setKillObj={setKillBlueObj} />
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
          <RuleModule lotteryArr={ lotteryArr} />
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
          value={props.redDouble }
          onChange={value => {
            props.setRedDouble(value)
          }}
          />
          <span className='machine-unit'>位</span>
          </div>
          <div>
          <span>蓝区</span>
            <Stepper
            defaultValue={1}
            min={0}
            value={props.blueDouble }
            onChange={value => {
              props.setBlueDouble(value)
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
                if (props.value==='union') {
                  props.setRedDouble(6)
                  props.setBlueDouble(1)
                }else  if (props.value==='lotto') {
                  props.setRedDouble(5)
                  props.setBlueDouble(2)
                }
           }}>清除</Button>
          </div>
          </div>
          <DoubleModule lotteryArr={ lotteryArr}/>
      </div>
      }

</div>
  )
}

export default Union
