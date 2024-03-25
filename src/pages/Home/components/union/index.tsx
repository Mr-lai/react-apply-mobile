import { Stepper,Button,Radio,Space } from 'antd-mobile';
import { useState } from 'react'
import classNames from 'classnames/bind'
import style from './index.module.scss';
import KillNumber from '../killNumber/index';
import { handleConventionArr ,handleDoubleArr} from '@/hook/index';
const cla = classNames.bind(style)
const Union = (props) => {
  const [inpValue, setInpValue] = useState('')
  const [inpValue1, setInpValue1] = useState('')
  // 常规注数
  const [stepperValue, setStepperValue] = useState(1)
  const [radioValue, setRadioValue] = useState('rule')
  const [redDouble,setRedDouble] = useState(6)
  const [blueDouble,setblueDouble] = useState(1)
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

  const automaticSelection = (type) => {
    if (type === 'rule') {
      const ruleArr = handleConventionArr(killBlueObj.arr, killRedObj.arr, props.value, radioValue, stepperValue)
      props.setLotteryArr(ruleArr)
    } else { 
      const doubleArr = handleDoubleArr(killBlueObj.arr, killRedObj.arr, props.value, radioValue, redDouble,blueDouble) 
      console.log(doubleArr);
      // props.setLotteryDoubleArr(doubleArr)
      props.setLotteryArr(doubleArr)
    }
  }

  return (
    <div className={ cla('union') }>
      <Radio.Group defaultValue='rule' onChange={value => { 
        setRadioValue(`${value}`)
        setInpValue('')
        setInpValue1('')
        props.setLotteryArr([])
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
       radioValue==='rule' && <div className='machine-selection'>
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
                props.setLotteryArr([])
                setStepperValue(1)
                          }}>清除</Button>
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
          
          <Button color='danger' size='small' fill='solid'
                          onClick={() => {
                            automaticSelection('double')
                          }}
                        >
                        开始机选
            </Button>
            <Button color='warning' size='small' fill='solid'    onClick={() => {
                           props.setLotteryArr([])
                           setStepperValue(1)
                          }}>清除</Button>
        </div>
      </div>
    }
</div>
  )
}

export default Union
