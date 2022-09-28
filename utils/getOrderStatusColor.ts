
const getStatusOrderColor = (distance = 1000000000) => {
    distance = distance / 1000 / 60
    if (distance > 10){
      return 'green'
    } else if (distance > 5) {
      return '#ffc311'
    } else if (distance < 5) {
      return 'red'
    }
}

export default getStatusOrderColor