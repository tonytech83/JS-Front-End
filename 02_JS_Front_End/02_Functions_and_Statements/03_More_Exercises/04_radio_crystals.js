function crystalTransforming(data) {
  [targetThickness, ...crystalOres] = data

  for (let crystalOre of crystalOres) {
    console.log(`Processing chunk ${crystalOre} microns`)

    let idx = 0;
    while (crystalOre / 4 >= targetThickness) {
      crystalOre /= 4;
      idx++
    }

    if (idx > 0) {
      console.log(`Cut x${idx}`)
      console.log(`Transporting and washing`)
      crystalOre = Math.floor(crystalOre)
      if (crystalOre === targetThickness) {
        console.log(`Finished crystal ${targetThickness} microns`)
        continue;
      }
    }

    idx = 0;
    while (crystalOre * 0.8 >= targetThickness) {
      crystalOre *= 0.8
      idx++
    } 

    if (idx > 0) {
      console.log(`Lap x${idx}`)
      console.log(`Transporting and washing`)
      crystalOre = Math.floor(crystalOre)
      if (crystalOre === targetThickness) {
        console.log(`Finished crystal ${targetThickness} microns`)
        continue;
      }
    }

    idx = 0;
    while (crystalOre - 20 >= targetThickness) {
      crystalOre -= 20;
      idx++
    } 

    if (idx > 0) {
      console.log(`Grind x${idx}`)
      console.log(`Transporting and washing`)
      crystalOre = Math.floor(crystalOre)
      if (crystalOre === targetThickness) {
        console.log(`Finished crystal ${targetThickness} microns`)
        continue;
      }
    }

    idx = 0;
    while (crystalOre - 2 >= targetThickness - 1) {
      crystalOre -= 2
      idx++
    } 

    if (idx > 0) {
      console.log(`Etch x${idx}`)
      console.log(`Transporting and washing`)
      crystalOre = Math.floor(crystalOre)
      if (crystalOre === targetThickness) {
        console.log(`Finished crystal ${targetThickness} microns`)
        continue;
      }
    }

    if (crystalOre < targetThickness) {
      crystalOre++
      console.log('X-ray x1')
    }

    console.log(`Finished crystal ${targetThickness} microns`)

  }

}

crystalTransforming([1375, 50000]);
crystalTransforming([1000, 4000]);
crystalTransforming([1000, 8100]);
crystalTransforming([1000, 4000, 8100]);
