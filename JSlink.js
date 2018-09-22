(function () {
// Initialize the variable that stores the objects.
var overrideCtx = {};
overrideCtx.Templates = {};
overrideCtx.OnPostRender = postRenderHandler;
// Register the template overrides.
SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();

// The postRenderHandler attends the OnPostRender event
function postRenderHandler(ctx) {
console.log('post render');
$("div.ms-rtestate-field").css("height","60px");
$("div.ms-rtestate-field").css("overflow-x","auto");
}