function switchItUp(number){
  let strNum = '';
  switch(number) {
    case 0:
      strNum = 'Zero'
      break;
    case 1:
      strNum = 'One'
      break;
    case 2:
      strNum = 'Two'
      break;
    case 3:
      strNum = 'Three'
      break;
    case 4:
      strNum = 'Four'
      break;
    case 5:
      strNum = 'Five'
      break;
    case 6:
      strNum = 'Six'
      break;
    case 7:
      strNum = 'Seven'
      break;
    case 8:
      strNum = 'Eight'
      break;
    case 9:
      strNum = 'Nine'
      break;
    }
  return strNum;
  //return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}

  console.log(switchItUp(5));