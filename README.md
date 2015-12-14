# l
because typing [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) is too fucking long! `l` is a handy shorthand function for `console.log`.

*(see [gist](https://gist.github.com/karlpatrickespiritu/ade7ad00ba00d35cc2bc))*

l(msg [, object, ...])
------
```JavaScript
function l() {
    if (arguments.length) console.log.apply(console, arguments)
}
```

Tests
------
```JavaScript
l(window); // Window {external: Object, chrome: Object…}

l('dog', { name: 'john', type: 'puppy' }); // dog Object {name: "john", type: "puppy"}

l('I have no life', true, { job: 'programmer' }); // I have no life true Object {job: "programmer"}

```


