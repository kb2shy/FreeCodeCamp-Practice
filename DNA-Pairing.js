const pairElement = (str) => {
    const dna = [];
    for (let char of str) {
      const temp = [char];
      switch(char) {
        case "C":
          temp.push("G");
          break;
        case "G":
          temp.push("C");
          break;
        case "A":
          temp.push("T");
          break;
        case "T":
          temp.push("A");
          break;
      }
      dna.push(temp);
    }

    return dna;
  }
  
  pairElement("GCG");