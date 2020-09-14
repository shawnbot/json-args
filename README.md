# json-args

**Problem:** You need to generate JSON from the command line, but escaping is a PITA and it just feels dirty.<br>
**Solution:** `json-args`

```sh
$ npx json-args --foo=bar
{"foo":"bar"}

$ npx json-args -x 1 -y 2 -y 3
{"x":1,"y":[2, 3]}

$ npx json-args --what-ever=never
{"what-ever":"never","whatEver":"never"}
```

## Options
**There are none!** Here's how it works:
1. All arguments (named and positional) are parsed with [yargs].
2. If there are named options, positional arguments are ignored and the output is a JSON object.

    ```sh
    $ npx json-args --some.nested.field=value
    {"some":{"nested":{"field":"value"}}}
    ```

3. Otherwise, the positional arguments are output as a JSON array.

    ```sh
    $ npx json-args 1 way or another
    [1,"way","or","another"]
    ```
    
You can process and further manipulate the output with other JSON-friendly CLI tools like [fx] and [jq].

## See also
[@toolia/json-args](https://www.npmjs.com/package/@toolia/json-args) is very similar to this package, but its built-in argument parser doesn't support nested fields (`--foo.bar=baz` generates `{"foo.bar":"baz"}`).

[yargs]: https://yargs.js.org/
[fx]: https://www.npmjs.com/package/fx
[jq]: https://stedolan.github.io/jq/
