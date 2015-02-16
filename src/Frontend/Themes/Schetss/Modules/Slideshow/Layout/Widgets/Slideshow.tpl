{*
    variables that are available:
    - {$gallery}: contains data about the gallery
    - {$slideshow}: contains an array with the images of the gallery, each element contains data about the image.
*}


{option:widgetGallery}

	<h2 class="realisaties">Realisaties</h2>

    <div id="slider">
        {iteration:widgetSlideshow} 
            <img class="single-slider" src="/src/Frontend/Files/slideshow/{$widgetSlideshow.filename}" alt="Realisatie">
        {/iteration:widgetSlideshow}
    </div>

{/option:widgetGallery}
