<header class="holder header-holder">

	<div class="main-header">

		
		<div  class="header">
			<div class="row">
				<div class="header-left">
					{* SEO logo: H1 for home, p for other pages *}
					<a title="{$siteTitle}" href="/"><img class="logo retina" src="/src/Frontend/Core/Layout/images/logo.png" alt="logo" /></a>
				</div>
				<div class="header-right">
					<nav class="fast-link">
						<ul>
							<li>
								<a href="http://junkers.be/DealerLocations.aspx">Junkers installateur</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>


		<div class="navigation">
			<div id="nav-row" >
				{* Navigation *}
				<nav class="main-nav">
					{$var|getnavigation:'page':0:1}
				</nav>
			</div>
		</div>
		<div class="clear"></div>

	</div>
</header>