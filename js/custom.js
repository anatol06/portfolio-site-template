jQuery(document).ready(function() {
	jQuery("#portfolio-sorting li:first-child a").addClass('active');

	jQuery("#portfolio-sorting li a").click(function() {
		// Remove the current active class
		jQuery("#portfolio-sorting li a.active").removeClass('active');

		// Add the active class to the clicked button
		jQuery(this).addClass('active');

		// Get the button text (filter value)
		var filterValue = 'cat-' + jQuery(this).text().toLowerCase().replace(' ', '-');

		// If we clicked "All", we show all items
		if (filterValue === "cat-all") {
			jQuery('.portfolio-entry').removeClass('port-hidden');
		} else {
			// Else, we find the portfolio entries that match the clicked button
			// And then add the class of .hidden
			jQuery(".portfolio-entry").each(function() {
				if (!jQuery(this).hasClass(filterValue)) {
					jQuery(this).addClass('port-hidden');
				} else {
					jQuery(this).removeClass('port-hidden');
				}
			});
		}
		return false;
	});
});

/* Main menu toggle */

jQuery(document).ready(function() {
   jQuery(".main-nav-button").click(function() {
   		jQuery(".main-nav ul li").slideToggle();

   });
});

/* Setting menu toggle */

jQuery(document).ready(function() {
   jQuery(".portfolio-sorting-button").click(function() {
   		jQuery(".portfolio-sorting-nav").slideToggle();

   });
});

/* Scroll to the top of the page */ 
  $(".fa-chevron-up").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
