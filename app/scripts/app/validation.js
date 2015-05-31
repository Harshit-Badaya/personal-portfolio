// Set form validation messages
$.extend($.validator.messages, {
	required: 'This field is invalid.'
});


// Form validation properties
$.validator.setDefaults({
	errorElement: 'label',
	onclick: false,
	onfocusout: false,

	errorPlacement: function(error, element) {
		element.addClass('invalid').closest('.form-group').addClass('has-error').append(error);
	},

	submitHandler: function(form, event) {
		event.preventDefault();

		// Hide form -- show loading animation
		var f = $(form).hide();
		var loading = $('<div class="spinner">Loading</div>').insertAfter(form);
		
		form.submit();
	}
});

$('form.validate').on('click', 'button[type=submit]', function() {
	
	var form = $(this).closest('form.validate');
	var validator = form.validate();
	
});