$(function(){
	$('select[name="user_film1"]').on( 'change', function () {

		var user_film2 = $('select[name="user_film2"]');
		user_film2.html("<option>Please wait...</option>");

		var user_film1 = $('select[name="user_film1"] option:selected').val();

		$.get( '/api/films/' + user_film1, function (data, status) {
			if ( status && data ) {
				user_film2.html('');

				var film_data = JSON.parse( data );

				$(film_data).each( function ( key, films ) {
					user_film2.append('<option value="'+ films.key +'">'+ films.display +'</option>')
				});

				user_film2.prop( 'disabled', false );

				return;
			}
		} );

			user_film2.html('').prop( 'disabled', true );
	}); 


	$('#adminLogin').submit( function (e) {
		e.preventDefault();
		$.ajax({
			type: "post",
			url: "/api/admin/login",
			data: $(this).serialize(),
			success: function ( data ) {
				if ( data == "success" ) {
					window.location = "/admin/dashboard"
				} else {
					$('.admin-login').html(
						'<p class="text-danger text-centred">Sorry, that was not possible.</p>'
						);
				}
			},
			error: function () {
				$('.admin-login').html(
					'<p class="text-danger text-centred">There has been an error</p>'
					);
			}
		})
	});

});


