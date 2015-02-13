{*
	variables that are available:
	- {$widgetBlogRecentArticlesFull}: contains an array with all posts, each element contains data about the post
*}

{option:widgetBlogRecentArticlesFull}
	<section class="index-news">
		{iteration:widgetBlogRecentArticlesFull}
			<article class="article">

				<div class="article-content">
					<div class="top">
						 <div class="article-image">
							{option:widgetBlogRecentArticlesFull.introduction}{$widgetBlogRecentArticlesFull.introduction}{/option:widgetBlogRecentArticlesFull.introduction}
						</div>
					</div>

					<div class="bottom">
						<header>
							<h2>{$widgetBlogRecentArticlesFull.title}</h2>
						</header>
					</div>
				</div>
				<div class="blog-bottom">
					{option:widgetBlogRecentArticlesFull.text}{$widgetBlogRecentArticlesFull.text}{/option:widgetBlogRecentArticlesFull.text}
				</div>
				<div class="blog-holder blog-overlay">
					{option:widgetBlogRecentArticlesFull.text}{$widgetBlogRecentArticlesFull.text}{/option:widgetBlogRecentArticlesFull.text}
				</div>
				<div class="clear"></div>
			</article>
		{/iteration:widgetBlogRecentArticlesFull}
	</section>
{/option:widgetBlogRecentArticlesFull}
