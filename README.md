# ink2txt

Emits all user-visible text in an [Ink](https://www.inklestudios.com/ink/) project, including choices. This is useful any time you want bulk access to the text, e.g. for automated spelling and grammar checks.

## Usage

First, install dependencies:

```
yarn
```

Then run the program:

```
yarn -q x path/to/compiled/ink/story.json
```

## Remarks

- This program works by traversing the story's compiled JSON file and emitting any string that satisfies the following criteria:
    - Starts with a `^` character.
    - Contains alphanumeric characters.
- Known false negative: user-visible text that does not contain alphanumeric characters, e.g., non-ASCII Unicode.
- I'm unsure if there are any false positives.
- A more robust algorithm would parse the JSON structure using the true set of [Ink rules](https://github.com/inkle/ink/blob/master/Documentation/ink_JSON_runtime_format.md), but that would add a lot of complexity.