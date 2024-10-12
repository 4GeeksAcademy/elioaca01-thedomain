let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let pronombre of pronoun) {
  for (let adjetivo of adj) {
    for (let nombre of noun) {
      let result = `${pronombre}${adjetivo}${nombre}.com`;
      console.log(result);
    }
  }
}
