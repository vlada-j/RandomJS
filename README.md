# RandomJS

Small library for easy working with random numbers, strings and arrays

## Use

### Get random integer
```javascript
rnd()
// return 0 or 1

rnd(3)
// return 0 or 1 or 2

rnd(3, 6)
// return 3 or 4 or 5 or 6

rnd(-7, -3)
// return -3 or -4 or -5 or -6 or -7
```

### Get random float
```javascript
rnd.float()
// return float between 0 and 1

rnd.float(3, 9)
// return float between 3 and 9

rnd.float(-3, -5)
// return float between -3 and -5
```

### Get random boolean
```javascript
rnd.boolean()
// just return true ro false
```

### Get random characters
```javascript
rnd.char(5)
// return string with 5 alphanumeric characters (mixed lowercase and uppercase)
```

### Playing with arrays
```javascript
rnd.any(['red', 'blue', 'green', 'yellow', 'orange'])
// return one item from array

rnd.some(['red', 'blue', 'green', 'yellow', 'orange'], 3)
// return 3 items from array 

rnd.anyIndex(['red', 'blue', 'green', 'yellow', 'orange'])
// return index of random item from array

// Shuffle array
rnd.shuffle(['red', 'blue', 'green', 'yellow', 'orange'])
// return shuffled array

// Shuffle string
rnd.shuffle('some string')
// return shuffled string
```

### Generate some ID (include numbers and characters)
```javascript
rnd.id(15)
// return string of 15 lowercase characters (include numbers)
// first character is always character
// default length is 10
```
