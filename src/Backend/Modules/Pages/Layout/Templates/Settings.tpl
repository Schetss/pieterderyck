{include:{$BACKEND_CORE_PATH}/Layout/Templates/Head.tpl}
{include:{$BACKEND_CORE_PATH}/Layout/Templates/StructureStartModule.tpl}

<div class="pageTitle">
	<h2>{$lblModuleSettings|ucfirst}: {$lblPages}</h2>
</div>

{form:settings}
	<div class="box">
		<div class="heading">
			<h3>{$lblMetaNavigation|ucfirst}</h3>
		</div>
		<div class="options">
			<p>{$msgHelpMetaNavigation}</p>
			<ul class="inputList pb0">
				<li><label for="metaNavigation">{$chkMetaNavigation} {$msgMetaNavigation|ucfirst}</label></li>
			</ul>
		</div>
	</div>

	<div class="fullwidthOptions">
		<div class="buttonHolderRight">
			<input id="save" class="inputButton button mainButton" type="submit" name="save" value="{$lblSave|ucfirst}" />
		</div>
	</div>
{/form:settings}

{include:{$BACKEND_CORE_PATH}/Layout/Templates/StructureEndModule.tpl}
{include:{$BACKEND_CORE_PATH}/Layout/Templates/Footer.tpl}
