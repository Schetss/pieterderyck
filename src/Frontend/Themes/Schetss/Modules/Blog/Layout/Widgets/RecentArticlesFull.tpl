{*
	variables that are available:
	- {$widgetBlogRecentArticlesFull}: contains an array with all posts, each element contains data about the post
*}

{option:widgetBlogRecentArticlesFull}
	<section class="index-news">
		{iteration:widgetBlogRecentArticlesFull}
			<article class="article">
				<div class="top">
					 <div class="article-image">
						{option:widgetBlogRecentArticlesFull.image}<img src="{$FRONTEND_FILES_URL}/blog/images/source/{$widgetBlogRecentArticlesFull.image}" alt="{$widgetBlogRecentArticlesFull.title}" />{/option:widgetBlogRecentArticlesFull.image}
					</div>
				</div>

				<div class="bottom">
					<header>
						<h2>{$widgetBlogRecentArticlesFull.title}</h2>
					</header>
					<div>
						{option:widgetBlogRecentArticlesFull.text}{$widgetBlogRecentArticlesFull.text}{/option:widgetBlogRecentArticlesFull.text}
					</div>
				</div>
				<div class="clear"></div>
			</article>
		{/iteration:widgetBlogRecentArticlesFull}
	</section>
{/option:widgetBlogRecentArticlesFull}
