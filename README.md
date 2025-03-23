# IEC-ST (IEC 61131-3 Structured Text) – Language Grammar for [Highlight.js](https://highlightjs.org/)

This repository provides a third-party language definition for **IEC 61131-3 Structured Text (ST)** for use with [Highlight.js](https://highlightjs.org/).

IEC 61131-3 Structured Text is a high-level programming language designed for industrial automation. It resembles Pascal, supports complex control logic, and is widely used in PLC programming across industries such as manufacturing, energy, and process control.

## Example Page

See an example implementation here: **[fisothemes/highlightjs-iecst](https://github.com/fisothemes/highlightjs-iecst)**

## Usage

### mdBook Integration

1. In your `book.toml` root directory, create a `theme/` folder.
1. Copy `dist/highlight.min.js` into it, and rename it to `highlight.js`.
1. Your folder structure should look like:

    ```mathematica
    my-book/
    ├── book/
    ├── theme/
    │   └── highlight.js
    └── book.toml
    ```
1. In your Markdown code blocks, use the language identifier `iecst`:

    ```markdown
        ```iecst
        PROGRAM MAIN
        VAR
          speed : LREAL := 0.0;
        END_VAR
        speed := 100.5;
        END_PROGRAM
        ```
    ```

### Browser Integration

To use the grammar in a standalone HTML page:

```html
<script src="path/to/highlight.min.js"></script>
<script src="path/to/iecst.min.js"></script>
<script>
  hljs.registerLanguage("iecst", window.hljsDefineIecst);
  hljs.highlightAll();
</script>
```

Then use:

```html
<pre><code class="language-iecst">
PROGRAM MAIN
VAR
  speed : LREAL := 0.0;
END_VAR
speed := 100.5;
END_PROGRAM
</code></pre>
```

> [!IMPORTANT]
> - `highlight.min.js` is the **Highlight.js core** (v10).
> - `iecst.min.js` is the **standalone language definition**.
> - If you use `dist/highlight.min.js` (bundled by this repo), you **do not need to include** `iecst.min.js` separately — it's already embedded.
> - Use the class name `language-iecst` in `<code>` blocks to activate the grammar.

## Installation

```bash
git clone https://github.com/fisothemes/highlightjs-iecst.git
cd highlightjs-iecst
npm install
```

## Build

To build everything:

- `dist/iecst.min.js` — standalone language definition
- `dist/highlight.min.js` — Highlight.js v10 core with `iecst` bundled
- `example/mdbook/theme/highlight.js` — copied for use with mdBook

Run:

```bash
npm run build
```

This uses the local `tools/highlight.js` (v10-compatible), appends your language definition, and minifies the result using `terser`.