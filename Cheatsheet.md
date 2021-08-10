# Regex Cheatsheet

Hello, everyone! In this markdown file, we'll be covering the usage of regular expressions in a few other languages by showing you each language specific syntax, and some Useful Regex Supporting API methods. Feel free to go through the whole file or use the navigation index below.

1. [JavaScript](#javaScript)
2. [Go](#go)
3. [Java](#java)
4. [Python](#python)
5. [Ruby](#ruby)
6. [Additional Resources](#additional-resources)

---

## JavaScript

### Pattern Declaration

In JavaScript, you can define regex patterns using **single-, double-quoted, or template strings**. An alternative to strings is **RegExp instances**, that can be declared using the **RegExp Constructor** or the **literal notation**(double forward slash).

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

It Tries to match the pattern on the target string. This method returns **null** if none (or an array) is found. If you are applying the global flag to the expression, the content of the array will be all the captured occurrences; if not, the array will contain a single match along with additional information about the captured value, such as its index, groups, and the targeted string.

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const pattern = /the/
console.log(sentence.match(pattern));
```

#### `String.split(pattern):`

This method splits the string and returns an array containing the splitted values. The separator parameter determines the positions where the string will be splitted. This parameter can be either a string, or a regular expression. On the example below, we're separating the string on each vowel.

> **👀 Observation**
> 
> Note that the splitted string array **does not** include the separators. 

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const separatorPattern = /[aeiou]/
console.log(sentence.split(separatorPattern));
```

#### `String.replace(pattern, replaceValue):`

This method replaces a value on the string with another; it can be a character, a word or a full sentence. The first parameter(searchValue) can be either a string or a regular expression, which will search for the value or values that will be replaced; the second parameter(replaceValue) is the value that will replace the captured value.

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const searchPattern = /o/
console.log(sentence.replace(searchPattern, "i"));
```

#### `RegExp.test(string):`

This method checks if the given string can be matched by the target regular expression and then returns a boolean.

```js
const sentence = "The quick brown fox jumped over the lazy dog"
const pattern = /quick/
console.log(pattern.test(sentence))
```

#### `RegExp.exec(string):`

This method works similarly to the match method, but with a few key differences.

1. It returns only one match, **regardless** of the presence of the global flag.
2. Modifies some properties on the RegExp Instance **after** the match. If you are interested in knowing which values are modified, here's the [documentation link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec#description) for reference. Take a look at the Description section.


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

Regex patterns in Go can be defined with strings. You can either use regular double-quoted strings(**requires double escaping** just like in JavaScript) or literal strings, which are declared with backticks and **do not require** Double escaping. 

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

Alternatives to **standalone** Strings are the **Compile** and **MustCompile** methods. Both expect a double-quoted or literal String pattern, parses it to a RegExp instance, which can then be used against text. 

> **📘 Compile Vs MustCompile**
> 
> There's a slight difference between these two methods: **Compile** returns two values, a regexp instance and an error object, while the **MustCompile** returns only the regexp instance, but panics if something happens in the parsing process.

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

In my opinion, Golang has a really good documentation. In it, you will not only find the methods' signatures but also a well written description along with a simple example. Having said that, there's not much I have to add in this section of our file besides sharing the link for the [**Original RegExp Docs**](https://golang.org/pkg/regexp/) and strongly recommend that you take a look at it.

---

## **Java**

[**Java's Official Documentation**](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html) offers an overview on the comprising parts of the **Regex Package**, along with its supporting flags and metacharacters, and each methods' signatures paired with a concise definition, but unfortunately, it is lacking on simple examples. In this section, we'll be targeting that. 

### Pattern Declaration

Pattern declaration in Java is made with the `Pattern.compile()` method, which expects a **String** as the pattern parameter. 

> **👀 Observation**
>
> Java **does not** have a similar solution to **JavaScript's Template String** or **Golang's Literal String**, so **we must always double escape some metacharacters(e.g shorthands)**. 

```java
import java.util.regex.*;

class Regex {  
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
2. `int flags` : The flags that will be applied to the pattern. In Java, the flags are represented as **bitmasks**. For more information on which flags Java Supports, they are listed and described at the [official documentation](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)

This method returns a `Pattern` instance. 


```java
import java.util.regex.*;

class Regex {  
  public static void main(String args[]) { 
    String sentence = "The quick brown fox jumped over the lazy dog";
    Pattern pattern = Pattern.compile("the");
  } 
}
```

#### `Pattern.matcher(CharSequence input)`

Creates a `Matcher` that will match a given input against this pattern.

This method has one parameter:

1. `CharSequence input`: The test string

This method returns a new `Matcher` for this pattern.

```java
import java.util.regex.*;

public class Regex {

    public static void main(String args[]) { 
        String ssn = "123-45-7890";
        Pattern pattern = Pattern.compile("\\d{3}-\\d{2}-\\d{3,4}");
        
        Matcher matcher = pattern.matcher(ssn);
    }
}
```

#### `Matcher.matches(String regex, CharSequence input)`

The `Matcher.matches()` is used to match the input sequence against the full text(beginning to end).
More info on [JavaTPoint](https://www.javatpoint.com/post/java-matcher-matches-method)

This method returns a `boolean`

```java
import java.util.regex.*;

class Regex {  
  public static void main(String args[]) { 
    String ssn = "123-45-7890";
    Pattern pattern = Pattern.compile("\\d{3}-\\d{2}-\\d{3,4}");
        
    Matcher matcher = pattern.matcher(ssn);
    System.out.println(matcher.matches()); // true
  } 
}
```

#### `String.split(CharSequence input, int limit)`

Splits a given `String` into an `Array` of substrings, resulting in a new `Array`.

```java
import java.util.regex.*;

class Regex {  
  public static void main(String args[]) { 
    String html = "#001 Desmond#002 Jin#003 Kate#004 Locke";
    String[] value = html.split("#\\d{3} ");
    for (String string : value) {
        System.out.println(string);
    }
  } 
}
```

#### `find(int start)`

Searches for the next subsequence of the input that matches the pattern.

Besides returning a `boolean`, this method also change the values on some properties on the previously initialized `Matcher` instance, such as:

1. `group`
2. `start`
3. `end`

Every new call, moves for the next possible matching subsequence and set new values on the `Matcher` instance, until there's no possible matches, resulting in a `false`.


```java
import java.util.regex.*;

class Regex {  
  public static void main(String args[]) { 
    String time = "[06-03-2021 17:08:40]";
    Pattern pattern = Pattern.compile("\\d{2}");
    Matcher matcher = pattern.matcher(time);
    while(matcher.find()) {
      System.out.println("Matched value: " + matcher.group());
      System.out.println("Start at: " + matcher.start());
      System.out.println("Ends at: " + matcher.end());
    }
  } 
}
```


#### `group()`
As the [documentation](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Matcher.html#group(int)) states: 
> _"Returns the input subsequence matched by the previous match._
> _This method returns a `String`; The (possibly empty) subsequence captured by the group during the previous match, or null if the group failed to match part of the input."_

This method has two overloads: 
1. `group(int group)`: This parameter represents each group's numbered backreference.
2. `group(String name)`: The `name` parameter can be used to backreference named capturing groups.
---

## **Python**

### Pattern Declaration
Just like `Go`, in `Python` you can either declare a pattern using the `re.compile()` method which creates a [regular expression object](https://docs.python.org/3/library/re.html#re-objects), or directly access the `re` module methods passing in the pattern as a `String`.

```python
import re

string_pattern = "((?:T|t)he)"
regex_object = re.compile("((?:T|t)he)")
```

### **Useful Regex Supporting API methods**

#### `re.search(pattern, string, flags=0)`

This method searches through the string capturing the first occurence that matches the defined pattern. 

This method returns a [**Match Object**](https://docs.python.org/3/library/re.html#match-objects) or **None**.

```python
import re

string_pattern = "((?:T|t)he)"
regex_object = re.compile("((?:T|t)he)")

sentence = "The quick red fox jumped over the lazy dog"

match_object = re.search(string_pattern, sentence)
# Or...
# match_object = regex_object.search(sentence)

print(match_object)
```

#### `re.match(pattern, string, flags=0)`

This method works similarly to the `re.search()` method. The only difference is that it restricts the search location to the **beginning of the String**.

This method returns a `Match Object` or **None**.

```python
import re

string_pattern = "((?:T|t)he)"
regex_object = re.compile("((?:T|t)he)")

sentence = "The quick red fox jumped over the lazy dog"

result = re.match(string_pattern, sentence)
# Or...
# result = regex_object.match(sentence)

print(result)

```
> ⚠ Keep in mind
> 
> This method will always restrict the search to the beginning of the string. If you need to perform a search at the beginning of each line, use the `re.search()` method along with the `re.MULTILINE` flag.

#### `re.fullmatch(pattern, string, flags=0)`

This method returns a `Match Object` if the whole string is matched by the defined pattern. Otherwise, it retursn **None**

```python
import re

string_pattern = "\d{3}-\d{2}-\d{4}"
regex_object = re.compile("\d{3}-\d{2}-\d{4}")

ssn = "123-45-6789"

result = re.fullmatch(string_pattern, ssn)
# Or...
# result = regex_object.match(sentence)

print(result)
```

#### `re.split(pattern, string, maxsplit=0, flags=0)`

This method split the String by the occurr­ences of the pattern. Use the `maxplit` parameter to limit the amount of occurences. 

Returns a `List` of all groups.

```python
import re

string_pattern = "[aeiou]"
regex_object = re.compile("[aeiou]")

sentence = "The quick brown fox jumped over the lazy dog"

result = re.split(string_pattern, sentence)
# Or...
# result = regex_object.split(sentence)

print(result)
```

#### `re.findall(pattern, string, flags=0)`

This method **finds all** occurrences in string and return them as a list of strings.

```python
import re

string_pattern = "((?:T|t)he)"
regex_object = re.compile("((?:T|t)he)")

sentence = "The quick red fox jumped over the lazy dog"

result = re.findall(string_pattern, sentence)

print(result)
```

---
## **Ruby**

### **Pattern Declaration**

```ruby
class Playground

  sentence = "The quick brown fox jumped over the lazy dog"
  pattern = Regexp.new(/((?:T|t)he)/)
  pattern2 = Regexp.compile(/((?:T|t)he)/) # Alias for Regexp.new()
  pattern3 = /((?:T|t)he)/ # puts pattern3.instance_of? Regexp == true
end
```

### **Useful Regex Supporting API methods**

#### **`String =~ Regexp`**

The pattern matching operator, matches a regular expression against a string and returns an `Integer` representing the starting position of the match, or `nil` if none was found.

```ruby
class Playground
  pattern = /\d{3}-\d{2}-\d{4}/
  ssn = "123-45-6789"

  puts ssn =~ pattern # 0
end
```
> 👀 Observation
> 
> This value can be stored on a regular variable like so:
> 
> ```ruby
> variable = ssn =~ pattern
> ```
> 
> However, this value has already been stored on the global `$~` variable, and it can also be accessed through the `Regexp.last_match`.

#### **`String.scan(pattern)`**

This method expects a pattern(`String` or `Regexp`) and iterates through in search for a match, returning an `Array` or `nil` if none was found.

```ruby
class Playground
    sentence = "The quick red fox jumped over the lazy dog"
    pattern = /(?:T|t)he/
    results = sentence.scan(pattern)
    print results

    
    sentence.scan(pattern).each do |match|
        puts "Found: #{match}"
    end
end
```

Alternatively, you can use the following syntax as well:

```ruby
class Playground
    sentence = "The quick red fox jumped over the lazy dog"
    pattern = /(?:T|t)he/
    sentence.scan(pattern).each do |match|
        puts "Found: #{match}"
    end
end
```

#### **`Regexp.match(string, start_pos)`**

The Match method matches a pattern against a string capturing the first occurence.

This method returns a `MatchObject` or `nil` if none was found. 

```ruby
class Playground
    sentence = "The quick red fox jumped over the lazy dog"
    pattern = /(?:T|t)he/
    matchedData = sentence.match(pattern)
    print matchedData
end
```

#### **`MatchData.named_captures()`**

This method returns a `Hash`, pairing the **capturing groups**(keys)  with their respective values. 

```ruby
class Playground
  pattern = /(?<fst>\d{3})-(?<scnd>\d{2})-(?<thrd>\d{4})/
  ssn = "123-45-6789"

  result = pattern.match(ssn)
  result_as_hash = result.named_captures
  print result_as_hash # {"fst"=>"123", "scnd"=>"45", "thrd"=>"6789"}
end
```

Alternatively, you can use this syntax as well:
```ruby
class Playground
  pattern = /(?<fst>\d{3})-(?<scnd>\d{2})-(?<thrd>\d{4})/
  ssn = "123-45-6789"

  result_as_hash = result.named_captures

  result_as_hash.each do |key, value|
      puts "#{key}: #{value}"
  end
  # fst: 123
  # scnd: 45
  # thrd: 6789
end
```

#### **`MatchData[]`**

Using this operator you have access to the matched data. Pass numbers for numbered backreference, or the capturing group name preceded by a colon. 

```ruby
class Playground
    pattern = /(?<fst>\d{3})-(?<scnd>\d{2})-(?<thrd>\d{4})/
    ssn = "123-45-6789"

    result = pattern.match(ssn)
    puts "Full Match: #{result[0]}"
    puts "First Group: #{result[1]}"
    puts "Second Group: #{result[2]}"
    puts "Thrid Group: #{result[3]}"
    
    puts "Named Backreference: #{result[:fst]}"
end
```


#### **`String.sub(pattern, replaceValue)`**

The `sub` method is the equivalent to  JavaScript's `String.prototype.replace()` method. The first parameter can be either a `Regexp` pattern or a `String` and the second parameter is the replace value.

```ruby
class Playground
    sentence = "The quick brown fox, jumped over the lazy dog"
    pattern = /the/i
    puts sentence.sub(pattern, "THE")
    # THE quick brown fox, jumped over the lazy dog
end
```

Notice that it only replaced the first occurence of the word **the**. The `sub` method only replaces the first occurence, and since Ruby(2.7.x) **does not** support the **global flag**, if you ever need to replace all the occurences, you need to use the gsub method. 

---
## **Additional Resources**

### Reading Material

- [Rexegg](http://www.rexegg.com/)
- [regular-expressions.info](https://www.regular-expressions.info/javascript.html)
- [javascript.info](https://javascript.info/regular-expressions)
- [Mastering Regular Expressions](https://www.oreilly.com/library/view/mastering-regular-expressions/0596528124/)
- [Regular Expressions Cookbook](https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/)

### Testing, Debugging & Visualizing
- [Regex101](https://regex101.com/)
- [Regexr](https://regexr.com/)
- [Regexper](https://regexper.com/)
