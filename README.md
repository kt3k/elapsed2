elapsed2
========

Readability improvement of nested `setTimeout`.

Usage
-----

```
elapsed(300)
.then(func1)
.then(func2)
.elapsed(500)
.then(func3)
.then(func4)
.elapsed(700)
.then(func5)
.then(func6);
```

The above invokes func1 after 300ms, and then func2, and then 500ms after invokes func3, and then func4, and then 700ms after invokes func5, and then func6.
