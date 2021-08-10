const sentence = `
/src
    - ListItem.js
    - Form.ts
    - Button.ts
`

console.log(sentence.replace(/(\w+)\.(js|ts)/g, "User$1.$2x"));

/* result:
/src
    - index.jsx
    - UserComponent.tsx
    - Button.tsx
*/
