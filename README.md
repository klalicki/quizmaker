# Astro-based Quiz Maker

For generating randomized individual quizzes from a question bank.

## how to use

1. install it
   ```bash
   npm install
   ```
2. add your quiz in `src/quizzes/your_quiz_name.yml`
3. run the dev server
   ```bash
   npm run dev
   ```
4. open your quiz and print it!

## quiz format:

```yaml
title: Your Quiz Title
variations: 5 # number of variations to generate
questions:
  - question: What does CSS stand for?
    answer: Cascading Style Sheets # correct answer
    options: # other options
      - Computer Stinky Stuff
      - Crazy Solid Snake
      - Cute Soft Sushi
  - question: What does HTML stand for?
    answer: HyperText Markup Language
    # etc...
```

To put code blocks in a question or answer, you can use YAML literal block style:
(a pipe character `|` followed by a newline and an indented block of text)

````yaml
- question: |
    Which of the following is valid HTML for the heading tag with the smallest size and lowest rank in the hierarchy?
    ```html
    <h6>This is a heading</h6>
    ```
````

You can also use double quotes for single-line markdown strings with inline code:

```yaml
- question: "What does `<div>` mean?"
```

Most other (single-line)markdown syntax should work fine without needing quotes or block style.

```yaml
- question: Here's a question with some *italic* and **bold** text
```

Because it's YAML, be careful with `:` and `-` in text. If you need to use them, wrap the text in quotes.
