/**
 * Register Route
 * @type {GarudaRoute}
 */
var AppRoute = new GarudaRoute()
	.to($app)
	.default('home')
	.nothing('page/404')
	.before(`<div class="jumbotron"> 
				<br>
				<h3 class="text-center">
					<strong>Please Wait... </strong>
				</h3>
			</div>`)
	.register(
	[
		{ 
		    route    : '/home',
		    response : 'page/home',
		    data 	 : {
		    	single : {
		    		framework  : 'Garuda Javascript 2'
		    	}
		    }
		},
		{
			route    : '/category',
			response : 'page/category'
		}
		,
		{
			route    : '/profile',
			response : 'page/profile'
		}
		,
		{
			route     : '/about',
			response : 'page/about'
		},
		{
			route 	  : '/contact',
			response  : $tmp_contact,
			data 	  : {
		    	single : {
		    		name    : 'Lamhot Simamora',
		    		email   : 'LamhotSimamora@gmail.com',
		    		phone   : '0822-8995-3600',
		    		website : 'www.lamhotsimamora.com'
		    	}
		    }
		},
		{
			route     : '/info',
			response  : function($app,$info,$data){
						return `<div class="jumbotron"> 
									Token : <strong> #token# </strong> 
									<hr />
									Info : <strong> <code>${_toJSON($info)}</code> </strong>
									<hr />
									Route : <strong> <code>${_toJSON(this.getAllRoute)}</code> </strong>
									<hr />
									Response : <strong> <code>${_toJSON(this.getAll)}</code>	</strong>		
								</div>`;
			},
			data      : {
				single : {
					token : _randomStr(25)
				}
			}
		},
		{
			route     : '/error',
			response  : $error
		}
	]);


function destroy()
{
	AppRoute.destroy();
	_a(`
		Route has been destroyed ! Refresh the page for reset !
	`);
}

function __GarudaRoute()
{
	return AppRoute;
}
