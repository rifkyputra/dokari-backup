var sowb=window.sowb||{};jQuery(function(n){var t=function(){n(".so-widget-sow-price-table").each(function(){var t=n(this);if(!t.is(":visible")||t.data("initialized"))return t;t.find(".sow-equalize-row-heights").each(function(){var o=n(this),t=function(t){var i=0,a=o.find(t);a.each(function(){i=Math.max(i,n(this).height())}),a.height(i)},i=0;o.find(".ow-pt-features").each(function(){i=Math.max(i,n(this).find(".ow-pt-feature").length)});for(var a=0;a<i;a++)t(".ow-pt-feature-index-"+a);[".ow-pt-title",".ow-pt-details",".ow-pt-image",".ow-pt-features",".ow-pt-button"].forEach(t)}),n(".ow-pt-icon[data-icon]").each(function(){var t=n(this),i=t.data("icon");if(n("#so-pt-icon-"+i).length){var a=n("#so-pt-icon-"+i+" svg").clone().css({"max-width":24,"max-height":24});""!==t.data("icon-color")?a.find("path").css("fill",t.data("icon-color")):a.find("path").css("fill","#333333"),t.append(a)}}),t.data("initialized",!0)})};t(),n(sowb).on("setup_widgets",t)});