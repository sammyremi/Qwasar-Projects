<!DOCTYPE html>
<html lang="en-US" class="theme-">
<head data-suburl="">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Sign In -  git </title>
	<link rel="manifest" href="/manifest.json" crossorigin="use-credentials">
	<meta name="theme-color" content="#6cc644">
	<meta name="author" content="Gitea - Git with a cup of tea" />
	<meta name="description" content="Gitea (Git with a cup of tea) is a painless self-hosted Git service written in Go" />
	<meta name="keywords" content="go,git,self-hosted,gitea">
	<meta name="referrer" content="no-referrer" />
	<meta name="_csrf" content="hVYfrZHqm3MrenS2k5V062Nm8mk6MTY3Njk5NTY5NDQ3MDUzNjg0OQ" />
	
	
	

	<script>
		window.config = {
			AppVer: '',
			AppSubUrl: '',
			StaticUrlPrefix: '',
			UseServiceWorker:  true ,
			csrf: 'hVYfrZHqm3MrenS2k5V062Nm8mk6MTY3Njk5NTY5NDQ3MDUzNjg0OQ',
			HighlightJS: false,
			SimpleMDE: false,
			Tribute: false,
			U2F: false,
			Heatmap: false,
			heatmapUser: null,
			NotificationSettings: {
				MinTimeout:  10000 ,
				TimeoutStep:   10000 ,
				MaxTimeout:  60000 ,
				EventSourceUpdateTime:  10000 ,
			},
			PageIsProjects: false,
      
		};
	</script>
	<link rel="icon" href="/img/favicon.svg" type="image/svg+xml">
	<link rel="alternate icon" href="/img/favicon.png" type="image/png">
	<link rel="mask-icon" href="/img/gitea-safari.svg" color="#609926">
	<link rel="fluid-icon" href="/img/gitea-lg.png" title="git">

	<link rel="stylesheet" href="/css/index.css?v=d41d8cd98f00b204e9800998ecf8427e">
	<noscript>
		<style>
			.dropdown:hover > .menu { display: block; }
			.ui.secondary.menu .dropdown.item > .menu { margin-top: 0; }
		</style>
	</noscript>
	<style class="list-search-style"></style>

	<meta property="og:title" content="git">
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/img/gitea-lg.png" />
	<meta property="og:url" content="https://git.us.qwasar.io/" />
	<meta property="og:description" content="Gitea (Git with a cup of tea) is a painless self-hosted Git service written in Go">

<meta property="og:site_name" content="git" />


</head>
<body>
	

	<div class="full height">
		<noscript>This website works better with JavaScript.</noscript>

		

		
			<div class="ui top secondary stackable main menu following bar light">
				<div class="ui container" id="navbar">
	<div class="item brand" style="justify-content: space-between;">
		<a href="/">
			<img class="ui mini image" src="/img/gitea-sm.png">
		</a>
		<div class="ui basic icon button mobile-only" id="navbar-expand-toggle">
			<i class="sidebar icon"></i>
		</div>
	</div>

	
		<a class="item " href="/">Home</a>
		<a class="item " href="/explore/repos">Explore</a>
	

	

	


	
		<a class="item" target="_blank" rel="noopener noreferrer" href="https://docs.gitea.io">Help</a>
		<div class="right stackable menu">
			
			<a class="item active" rel="nofollow" href="/user/login?redirect_to=%2fuser%2flogin">
				<svg viewBox="0 0 16 16" class="svg octicon-sign-in" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm6.56 4.5l1.97-1.97a.75.75 0 10-1.06-1.06L6.22 7.47a.75.75 0 000 1.06l3.25 3.25a.75.75 0 101.06-1.06L8.56 8.75h5.69a.75.75 0 000-1.5H8.56z"/></svg> Sign In
			</a>
		</div>
	
</div>

			</div>
		


<div class="user signin">
	

	<div class="ui container">
				
		



		
		<h4 class="ui top attached header center">
			
				Sign In
			
		</h4>
		<div class="ui attached segment">
			<form class="ui form" action="/user/login" method="post">
			<input type="hidden" name="_csrf" value="hVYfrZHqm3MrenS2k5V062Nm8mk6MTY3Njk5NTY5NDQ3MDUzNjg0OQ">
			<div class="required inline field ">
				<label for="user_name">Username or Email Address</label>
				<input id="user_name" type="text" name="user_name" value="" autofocus required>
			</div>
			
			<div class="required inline field ">
				<label for="password">Password</label>
				<input id="password" name="password" type="password" value="" autocomplete="off" required>
			</div>
			
			
			<div class="inline field">
				<label></label>
				<div class="ui checkbox">
					<label>Remember Me</label>
					<input name="remember" type="checkbox">
				</div>
			</div>
			

			<div class="inline field">
				<label></label>
				<button class="ui green button">
					
						Sign In
					
				</button>
				<a href="/user/forgot_password">Forgot password?</a>
			</div>

			

			
			</form>
		</div>

	</div>
</div>


	

	</div>

	

	<footer>
	<div class="ui container">
		<div class="ui left">
			Powered by Gitea Version:  Page: <strong>107ms</strong> Template: <strong>103ms</strong>
		</div>
		<div class="ui right links">
			
			<div class="ui language bottom floating slide up dropdown link item">
				<i class="world icon"></i>
				<div class="text">English</div>
				<div class="menu language-menu">
					
						<a lang="en-US" data-url="/?lang=en-US" class="item active selected">English</a>
					
						<a lang="zh-CN" data-url="/?lang=zh-CN" class="item ">简体中文</a>
					
						<a lang="zh-HK" data-url="/?lang=zh-HK" class="item ">繁體中文（香港）</a>
					
						<a lang="zh-TW" data-url="/?lang=zh-TW" class="item ">繁體中文（台灣）</a>
					
						<a lang="de-DE" data-url="/?lang=de-DE" class="item ">Deutsch</a>
					
						<a lang="fr-FR" data-url="/?lang=fr-FR" class="item ">français</a>
					
						<a lang="nl-NL" data-url="/?lang=nl-NL" class="item ">Nederlands</a>
					
						<a lang="lv-LV" data-url="/?lang=lv-LV" class="item ">latviešu</a>
					
						<a lang="ru-RU" data-url="/?lang=ru-RU" class="item ">русский</a>
					
						<a lang="uk-UA" data-url="/?lang=uk-UA" class="item ">Українська</a>
					
						<a lang="ja-JP" data-url="/?lang=ja-JP" class="item ">日本語</a>
					
						<a lang="es-ES" data-url="/?lang=es-ES" class="item ">español</a>
					
						<a lang="pt-BR" data-url="/?lang=pt-BR" class="item ">português do Brasil</a>
					
						<a lang="pt-PT" data-url="/?lang=pt-PT" class="item ">Português de Portugal</a>
					
						<a lang="pl-PL" data-url="/?lang=pl-PL" class="item ">polski</a>
					
						<a lang="bg-BG" data-url="/?lang=bg-BG" class="item ">български</a>
					
						<a lang="it-IT" data-url="/?lang=it-IT" class="item ">italiano</a>
					
						<a lang="fi-FI" data-url="/?lang=fi-FI" class="item ">suomi</a>
					
						<a lang="tr-TR" data-url="/?lang=tr-TR" class="item ">Türkçe</a>
					
						<a lang="cs-CZ" data-url="/?lang=cs-CZ" class="item ">čeština</a>
					
						<a lang="sr-SP" data-url="/?lang=sr-SP" class="item ">српски</a>
					
						<a lang="sv-SE" data-url="/?lang=sv-SE" class="item ">svenska</a>
					
						<a lang="ko-KR" data-url="/?lang=ko-KR" class="item ">한국어</a>
					
				</div>
			</div>
			<a href="/js/licenses.txt">Licenses</a>
			<a href="/api/swagger">API</a>
			<a target="_blank" rel="noopener noreferrer" href="https://gitea.io">Website</a>
			
			<span class="version">Go1.15.2</span>
		</div>
	</div>
</footer>






	<script src="/js/index.js?v=d41d8cd98f00b204e9800998ecf8427e"></script>

</body>
</html>

