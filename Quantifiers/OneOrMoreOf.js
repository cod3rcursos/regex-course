const files = ["style.css", "theme.scss", "User.js", "Login.jsx", "LoginRefactor.tsx", "UserModel.ts"]
const sentence = files.join("\n")
console.log(sentence);
// [1-9]+
// \w+
console.log(sentence.match(/\w+\.(json|s?css|jsx?|tsx?)/g));