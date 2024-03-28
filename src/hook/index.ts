 // 定义泛型
  type Params =[
    number
]
import { unionRedData, unionBlueData, lottoRedData, lottoBlueData, eightHappy } from './data';

const handleConventionArr = (killBlueObj:Array<Params>, killRedObj:Array<Params>, value:string, stepperValue:number) => { 
  const resultData = []
  const arr = [...new Set([...unionRedData, ...killRedObj])]
  for (let index = 0; index < arr.length; index++) {
    if(Number(arr[index])>=34){
        delete arr[index]
      }
  }
  const arr1 = [...new Set([...unionBlueData, ...killBlueObj])]
  for (let index = 0; index < arr.length; index++) {
    if(Number(arr[index])>=17){
        delete arr1[index]
      }
  }
  let i = 1
  switch (value) {
    case 'union':
      while (i<=stepperValue) { 
        resultData.push({
          red:getRandomArrayElements(arr,6),
          blue: getRandomArrayElements(arr1,1)
        })
        i++
      }
      return resultData
      break;
      case 'lotto':
        while (i<=stepperValue) { 
          resultData.push({
            red:getRandomArrayElements(arr,5),
            blue: getRandomArrayElements(arr1,2)
          })
          i++
        }
        return resultData
        break;
    default:
      break;
  }
}
const handleDoubleArr = (killBlueObj: Array<Params>, killRedObj: Array<Params>, value:string, redDouble:number, blueDouble:number) => { 
  const resultData = []
  const arr = [...new Set([...unionRedData, ...killRedObj])]
  for (let index = 0; index < arr.length; index++) {
    if(Number(arr[index])>=34){
        delete arr[index]
      }
  }
  const arr1 = [...new Set([...unionBlueData, ...killBlueObj])]
  for (let index = 0; index < arr.length; index++) {
    if(Number(arr[index])>=17){
        delete arr1[index]
      }
  }
  switch (value) {
    case 'union':
      resultData.push({
        red:getRandomArrayElements(arr,redDouble),
        blue: getRandomArrayElements(arr1,blueDouble)
      })
  
    return resultData
      break;
      case 'lotto':
        resultData.push({
          red:getRandomArrayElements(arr,redDouble),
          blue: getRandomArrayElements(arr1,blueDouble)
        })
    return resultData
      break;
    default:
      []
      break;
  }
}
const getRandomArrayElements = (arr: Array<Params>, count: number) => {
  let i = arr.length
  const min = i - count
  let temp = []
  let index = 0
  const shuffled = arr.slice(0);  //只是声明变量的方式, 也可以分开写
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
      temp = shuffled[index];  //即值交换
      shuffled[index] = shuffled[i]; 
      shuffled[i] = temp;
  }
  return shuffled.slice(min).sort((a,b)=> a-b);
}

export {getRandomArrayElements,handleConventionArr,handleDoubleArr}