var menuOpen = false;//The default state of the floating menu

window.onload = function () {
	$('body').on('click',function(){
		//Try to close a menu only when the menu is open
        if(menuOpen) {
        	let menuItems = $('nav > a:not(:first-of-type)');
        	let delay = 0;
        	 menuItems.each(function(index) {
           	setTimeout(function(){
           		menuItems.eq(index).animate({'opacity':0 },300,function(){
           			menuItems.eq(index).css({'display':'none'});
           		});
           	}, delay + ( 50 * index));
           });
           //Can't use this
           $('nav > a:first-of-type').removeClass('close');
           menuOpen= false;	
        }
	});
	$('nav > a:first-of-type').on('click', function(event) {
		event.preventDefault();// Stop the navigating default action of a hyperlink.
		event.stopPropagation();//Stop propagating the event to <nav> and <body>
		//Get all the non-first <a> elements under <nav> and stored them into menuItems.
		let menuItems = $('nav > a:not(:first-of-type)');
        // Set up a variable for creating a different length of animation delay
		let delay = 0;
		if(menuOpen){
           menuItems.each(function(index) {
           	setTimeout(function(){
           		menuItems.eq(index).animate({'opacity':0 },300,function(){
           			menuItems.eq(index).css({'display':'none'});
           		});
           	}, delay + ( 50 * index));
           });
           $(this).removeClass('close');
           menuOpen= false;	
		}
		//Whwn menuOpen is false, try to show the entire menu.
		else {
             // Run a function with the index information for
             // every items stored in menuItem
             menuItems.each(function(index){
                  //Use setTimeout to delay an animation for every single menuaItem 
                  setTimeout(function(){
                  	menuItems.eq(index).css({'display':'inline'});
                  	menuItems.eq(index).animate({'opacity':0.6},300);
                  }, delay + (50 * index));
             });
             //Add the class name 'close' to the clicked first <a> under <nav>
             $(this).addClass('close');
             //Now the menu is open, so set menuOpen as 'ture'
             menuOpen = true;
             }
           });   
		};