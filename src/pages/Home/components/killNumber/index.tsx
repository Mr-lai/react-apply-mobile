import { Input,NumberKeyboard,Toast} from 'antd-mobile';
import { useState } from 'react'
import classNames from 'classnames/bind'
import killStyle from './index.module.scss';
const cla = classNames.bind(killStyle)
const KillNunber = (props) => { 

  const [visible, setVisible] = useState(false)
  const actions = {
    onClose: () => {
      Toast.show('输入成功')
      setVisible(false)
      const arr = props.inpValue.split(",")
        props.setKillObj({
          value: props.killObj.value,
          arr: arr,
          id:props.killObj.id
        })
    },
    onInput: (key: string) => {
      Toast.show(key)
    },
    onDelete: () => {
      Toast.show('delete')
    },
  }
  const onInput = (value: string) => {
    props.setInpValue(props.inpValue + value)
  }

  const onDelete = () => {
    props.setInpValue(props.inpValue.slice(0, -1))
  }
  const handleBlur = () => { 
    setVisible(false)
    const arr = props.inpValue.split(",")
    props.setKillObj({
      value: props.killObj.value,
      arr: arr,
      id:props.killObj.id
    })
  }

  return (
    <div className={cla('kill-num')}>
      <div className={cla('kill-text')}>{props.killObj.value}</div>
      <Input
        placeholder={`请输入${ props.killObj.value},用逗号隔开`}
        value={props.inpValue}
        onClick={() => setVisible(true)}
        onBlur={handleBlur}
      />
    <NumberKeyboard
          visible={visible}
          onClose={actions.onClose}
          onInput={onInput}
          onDelete={onDelete}
          customKey={[',', '-']}
          confirmText='确定'
        />
    </div>
  )
}
export default KillNunber