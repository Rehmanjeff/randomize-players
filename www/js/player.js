$( document ).ready(function() {
	// click "Run" to replay

	$('.place_clone').on('click',function(argument) 
	{
		var count = $('.count_divs').size();
		var html_op = '<div class="parent_clone_div'+count+'"><div class="count_divs col-md-7 col-sm-7 col-xs-10"><input type="text" placeholder="Enter Player Name" class="form-control" name="names[]"></div><div class="col-md-3 col-sm-3 col-xs-2"><a href="#" id="parent_clone_div'+count+'" class="remove-input"><span class="glyphicon glyphicon-minus remove-button"></span></a></div><div class="clearfix"></div><br>';
		$('.place_cloned_content').append(html_op);
	});

	$(document).on('click','.remove-input',function(e) 
	{
		e.preventDefault();
		var id = this.id;
		$('.'+id).remove();
	});

	$(document).on('click','.form_submit',function(e) 
	{
    	// alert('submitted');
		e.preventDefault();
		var map = {};
	    
	    map = JSON.stringify($('form').serializeArray());
	    var total_players;

	    var obj = jQuery.parseJSON(map);

    	total_players = obj.length;

    	// genreate unique random numbers
		var uniqueRandoms = [];
		var numRandoms = total_players;
		function makeUniqueRandom() {
		    // refill the array if needed
		    if (!uniqueRandoms.length) {
		        for (var i = 0; i < numRandoms; i++) {
		            uniqueRandoms.push(i);
		        }
		    }
		    var index = Math.floor(Math.random() * uniqueRandoms.length);
		    var val = uniqueRandoms[index];

		    // now remove that value from the array
		    uniqueRandoms.splice(index, 1);

		    return val;

		}
		// End generating numbers

	    var random_numbers_player = [];
	    var turn_string;

	    for (var i = obj.length - 1; i >= 0; i--) {
	    	

	    	var player_turn = (makeUniqueRandom() + 1);

	    	if (player_turn == 1) {
	    		turn_string = 'st place';
	    	}
	    	else if (player_turn == 2) {
	    		turn_string = 'nd place';
	    	}
	    	else if (player_turn == 3) {
	    		turn_string = 'rd place';
	    	}
	    	else
	    	{
	    		turn_string = 'th place';
	    	}

			random_numbers_player.push(obj[i].value+' has <code>'+ player_turn + turn_string +'</code>');
			// console.log(obj[i].value+' has '+ rand + 'th turn');
	    }
		
		// console.log(random_numbers_player);
		
		$('.add_players').addClass('hidden');


		/*var $body = $('body').css({"width":"0%","margin":"auto"});

		var loading = [
		    { elements: $body, properties: { width: '20%' } },
		    { elements: $body, properties: { width: '30%' } },
		    { elements: $body, properties: { width: '50%' } },
		    { elements: $body, properties: { width: '100%' } },
		    { elements: $body, properties: { height: '100%' }, options: { 
		      complete: function () { 
		        $('.wrap').velocity( 'transition.slideUpIn' );
		        $('img').velocity( 'transition.flipYIn' );
		        $('html').css({"background":"#fff"});
		      }
		    }
		  }
		]; 

		$.Velocity.RunSequence(loading);*/

				$('.cssload-thecube').removeClass('hidden');
		 setTimeout(function(){
		 		$('body').css({"color":"white","background":"black"});
				$('.cssload-thecube').addClass('hidden');
				$('.result').removeClass('hidden');
		    }, 3000);

		for (var i = random_numbers_player.length - 1; i >= 0; i--) {
			// alert(random_numbers_player[i]);
			$('.omitt_results').append("<li>"+random_numbers_player[i]+"</li>");
		}

	});



});
