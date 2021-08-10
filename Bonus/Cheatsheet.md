# Regex Cheatsheet

Hello, everyone! In this markdown file, we'll be covering the usage of regular expression in a few other languages by showing you each language specific syntax, and some Useful Regex Supporting API methods. Feel free to go throught the whole file or use the navigation index bellow.

1. [JavaScript](#javaScript)
2. [Go](#go)
3. [Java](#java)
4. [Python](#python)
5. [Ruby](#ruby)
6. [Additional Resources](#aditional-material)

---

## JavaScript

### Pattern Declaration

In JavaScript, you can define regex patterns using **single-, double-quoted, or template strings**. An alternative to strings is **RegExp instances**, that be declared using the **RegExp Constructor** or the **literal notation**(double forwardslash).

```js
const sentence = "The quick brown fox jumped over the lazy dog"

// Regex Literal 
const thePattern = /the/

// RegExp Instance
const thePattern1 = new RegExp("the")
const thePattern2 = new RegExp(thePattern)
```

### **Useful Regex Supporting API methods**

#### `String.match(pattern):`

It Tries to match the pattern on the target string. This method returns **null** if none was found or an array. If you are applying the global flag to the expression, the content of the array will be all the caputered occurences; if not, the array will contain a single match along with aditional informations about the captured value, such as its index, groups, and the targeted string.

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const pattern = /the/
console.log(sentence.match(pattern));
```

#### `String.split(pattern):`

This method splits the string and returns an array containing the splitted values. The separator parameter determines the positions where string will be splitted. This parameter can be either a string, or a regular expression. On the exaple bellow, we're separating the string on each vowel.

> **👀 Observation**
> 
> Note that the splitted string array **does not** include the separators. 

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const separatorPattern = /[aeiou]/
console.log(sentence.split(separatorPattern));
```

#### `String.replace(pattern, replaceValue):`

This method replaces a value on the string with another, it can be a character, a word or a full sentence. The first parameter(searchValue) can be either a string, or a regular expression which will search for the value or values that will be replaced; the second paramenter(replaceValue) is the value that will replace captured value.

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const searchPattern = /o/
console.log(sentence.replace(searchPattern, "i"));
```

#### `RegExp.test(string):`

This method checks if the given string can be matched by the target regular expression and returns a boolean.

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const pattern = /quick/
console.log(pattern.test(sentence))
```

#### `RegExp.exec(string):`
This method works similarly to the match method, but with a few key differences.

1. It only returns only one match, **regardless** of the presence of the global flag.
2. Modifies some properties on the RegExp Instance after the match. If you are interested in knowing which values are modified, here's the [documentation link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#description) for reference. Take a look at the Description section.


```js
const sentence = "The quick brown fox jumped over the lazy dog"
const pattern = /o/
const pattern2 = /o/g

// Both produce the same output
console.log(pattern.exec(sentence)) 
console.log(pattern2.exec(sentence))
```

---
## **Go**

### Pattern Declaration

#### **Strings**

Regex patterns in Go can be defined with strings. You can either use regular double-quoted strings(**requires double escaping** just like in JavaScript); or literal strings which are declared with backticks, that (**does not require** double escaping). 

```go
package main

import (****
	"regexp"
)

func main() {
    sentence := "The quick brown fox jumped over the lazy dog"
	thePattern := `the`
    theSecondPattern := "the"
}
```

#### **Compile & MustCompile**

An alternative to Strings is the **Compile** and **MustCompile** methods. Both expect a double-quoted or literal String pattern, parses it to a RegExp instance, which can then be used against text. 

> **📘 Compile Vs MustCompile**
> 
> There's a slight difference between these two methods. **Compile** returns two values, a regexp instance and an error object; while the **MustCompile** returns only the regexp instance, but panics if something happens in the parsing process.

```go
package main

import (
	"regexp"
)

func main() {
    sentence := "The quick brown fox jumped over the lazy dog"
    pattern := `the`
    
    cRegexpInstance, err := regexp.Compile(pattern)
	mcRegexpInstance2 := regexp.MustCompile(pattern)
}
```

### **Useful Regex Supporting API methods**

In my opinion, Golang has a really good documentation. There, you will not only find the methods' signatures but also a well written description along with a simple example. With that said, there's not much I have to add in this section of our file besides sharing the link for the [**Original RegExp Docs**](https://golang.org/pkg/regexp/) and my strong recomendations to take a look at it.

---

## **Java**

[Java's Official Documentation](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html) offers an overview on the comprising parts of the **Regex Package**, along with its supporting flags and metacharacters, and each methods' signatures paired with a concise definition, but unfortunately, it lacks on simple examples. In this section, we'll be targeting that. 

### Pattern Declaration

Pattern declaration in Java is made with the `Pattern.compile()` method, which expects a **String** as the pattern parameter. 

> **👀 Observation**
>
> Java **does not** have a similar solution to **JavaScript's Template String or Golang's Literal String**, so **we must always double escape some metacharacters(e.g shorthands)**. 

```java
import java.util.regex.*;

class teste {  
  public static void main(String args[]) { 
    String sentence = "The quick brown fox jumped over the lazy dog";
    Pattern pattern = Pattern.compile("the");
  } 
}
```

### **Useful Regex Supporting API methods**

#### compile(String regex, int flags?)
Compiles the given regular expression into a pattern with the given flags.

This method has two parameters:
1. `String regex`: The expression to be compiled
2. `int flags` - The flags that will be applied to the pattern. In Java, the flags are represented as **bitmasks**. For more information on which flags Java Supports, they are listed and described at the [official documentation](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)

This method returns a `Pattern` instance. 


```java
import java.util.regex.*;

class teste {  
  public static void main(String args[]) { 
    String sentence = "The quick brown fox jumped over the lazy dog";
    Pattern pattern = Pattern.compile("the");
  } 
}
```

#### `Pattern.matcher(String regex, int flags?)`

Creates a `Matcher` that will match the given input against this pattern.

This method returns a new `Matcher` for this pattern.

#### `Matcher.matches(String regex, int flags?)`

Compiles the given regular expression and attempts to match the given input against it.

This method returns a `boolean`; `true` if, and only if, a subsequence of the input sequence matches this matcher's pattern.


#### `String.split(String regex, int flags?)`

Splits the given input sequence around matches of this pattern.

This method returns the `Array` of `Strings` computed by splitting the input around matches of this pattern.


#### `find(String regex, int flags?)`

Attempts to find the next subsequence of the input sequence that matches the pattern.

This method returns a `boolean`; `true` if, and only if, a subsequence of the input sequence starting at the given index matches this matcher's pattern.

#### `group(String regex, int flags?)`

Returns the input subsequence matched by the previous match.

This method returns a `String`; The (possibly empty) subsequence captured by the group during the previous match, or null if the group failed to match part of the input.

---

## Python

### Pattern Declaration

### **Useful Regex Supporting API methods**


---
## Ruby

### Pattern Declaration

### **Useful Regex Supporting API methods**


## **Additional Resources**

### Reading Material

- [Rexegg](http://www.rexegg.com/)
- [regular-expressions.info](https://www.regular-expressions.info/javascript.html)
- [javascript.info](https://javascript.info/regular-expressions)
- Mastering Regular Expressions(book)
- Regular Expressions Cookbook(book)

### Testing, Debugging & Visualizing
- [Regex101](https://regex101.com/)
- [Regexr](https://regexr.com/)
- [Regexper](https://regexper.com/)