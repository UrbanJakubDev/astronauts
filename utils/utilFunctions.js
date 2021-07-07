const birth_replace = (date) => {
  let newDate = new Date(date.toString())
  let day = newDate.getDate()
  let month = newDate.getMonth()
  let year = newDate.getFullYear()

  return `${day}-${month}-${year}`
}

export default birth_replace
