(function() {

	// Export to global scope
	window.random = rnd;

	// METHODS
	rnd.boolean	= boolean;
	rnd.float	= _;
	rnd.char	= char;
	rnd.id		= id;
	rnd.shuffle	= shuffle;
	rnd.any		= any;
	rnd.some	= some;
	rnd.anyIndex= anyIndex;


//--------------------------------------------------------------------------------------------------


	// Random float numbers
	function _(n, m) {
		var min = Math.min(n||0, m||0),
			max = Math.max(n||1, m||0);
		return min + Math.random() * (max-min);
	}


	// Random integer numbers
	function rnd(n, m) {
		return Math.round( _(n, m) );
	}


	// true or false
	function boolean() {
		return Math.random()<.5;
	}


	// Random characters
	function char(n) {
		var id = '', i = 0;
		n = n || 1;
		for (; i < n; i++) { id += String.fromCharCode( Math.random()*25+(boolean()?65:97) ); }
		return id;
	}


	// Generate some ID (include numbers and characters)
	function id(n, upperCase) {
		n = n || 10;
		upperCase = upperCase ? 'toUpperCase' : 'toLowerCase';
		return (char() + Math.random().toString(35).slice(2, n + 1))[upperCase]();
	}


	// Get random index of one item
	function anyIndex(input) {
		return Math.floor( _(input.length) );
	}


	// Get one random item
	function any(input) {
		return input[ anyIndex(input) ];
	}


	// Get some random items
	function some(input, n) {
		return shuffle(input).slice(0, n);
	}


	// Shuffle array or string
	function shuffle(input) {
		var isString = typeof input === 'string',
			array = isString ? input.split('') : input,
			copy = [].concat(array),
			result = [],
			i = 0;

		for(; i < array.length; i++) {
			result.push( copy.splice(anyIndex(copy),1)[0] );
		}
		return isString ? result.join('') : result;
	}

})();
