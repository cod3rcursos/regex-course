const mathExp = "∀x∀y[∀z(z∈x↔z∈y)→x=y]"
const regex = /[∀-⋿←-⇿]/g
const regex2 = /[\u{2200}-\u{22FF}\u{2190}-\u{21FF}]/gu

console.log(mathExp.match(regex));
console.log(mathExp.match(regex2));