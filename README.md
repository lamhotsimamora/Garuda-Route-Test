# Garuda-Route-Test


### Demo
<a href="https://lamhotsimamora.github.io/Garuda-Route-Test">Demo</a>


### Syntax
```
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
					}
				]);
```


### CDN Garuda Javascript 2
```
https://www.cdn.lamhotsimamora.com/garuda2
```