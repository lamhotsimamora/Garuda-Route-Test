/**
 * Turn On Development Mode
 * @type {Boolean}
 */
_dev_ = true;

/**
 * Register Element
 * @type {[id]}
 */
$app = __({
	el:'app'
});

$header = __({
	el:'header'
});

$footer = __({
	el:'footer'
});

$error = __({
	el:'error'
});


/**
 * Register Template
 * @type {GarudaTemplate}
 */
$tmp_header = new GarudaTemplate({
	id : 'tmp_header'
}).to($header);

$tmp_footer = new GarudaTemplate({
	id : 'tmp_footer'
}).to($footer);

$tmp_contact = new GarudaTemplate({
	id : 'tmp_contact'
});

/*
* ===============================
*/

$t_search = __({
	el:'t_search'
});


function updateTitle(index=null)
{
	index = (index==null) ? '' : index + ' | ';
	_setTitle(index+' Welcome to Garuda Route Javascript ');
}

updateTitle();
