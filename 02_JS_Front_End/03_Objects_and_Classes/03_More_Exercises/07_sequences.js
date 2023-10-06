function findUniquesNumberSequences(data) {

  let uniquesNumberSequences = new Set();

  data
    .forEach(str => {
      let strToArr = JSON.parse(str).sort((a, b) => b - a)
      let ArrToStr = JSON.stringify(strToArr)
      uniquesNumberSequences.add(ArrToStr)
    });

  let arr = [];

  uniquesNumberSequences
    .forEach(str => {
      arr.push(JSON.parse(str))
    })

  let sorted = arr
    .sort((a, b) => a.length - b.length)

  sorted
    .forEach(arr => console.log(`[${arr.join(", ")}]`))

}

findUniquesNumberSequences(
  [
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
  ]
)

findUniquesNumberSequences(
  [
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
  ]
)