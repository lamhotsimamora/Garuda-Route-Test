function searchBlog()
{
	var ss = $t_search.getValue;
	if (ss != null || ss != undefined)
	{
		_a(ss);
	}else{
		$t_search.focus();
	}
}

function enterSearch(e)
{
	if (e.keyCode==13)
	{
		searchBlog();
	}
}

$t_search.focus();