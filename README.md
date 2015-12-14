# l
because typing `console.log` is too fucking long! `l` is a handy shorthand function for `console.log`.


```JavaScript
function l() {
    if (arguments.length) console.log.apply(console, arguments)
}
```

tests
```JavaScript
l(window); // Window {external: Object, chrome: Object…}

l('dog', { name: 'john', type: 'puppy' }); // dog Object {name: "john", type: "puppy"}

l('I have no life', true, { job: 'programmer' }); // I have no life true Object {job: "programmer"}

```


