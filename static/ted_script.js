$('document').ready(function(){
	speakers = [
		$('#speaker1'),
		$('#speaker2'),
		$('#speaker3'),
		$('#speaker4'),
		$('#speaker5'),
		$('#speaker6'),
		$('#speaker7'),
	];
	current = speakers[0];
	speakers.forEach(function(speaker){
		if(speaker != current)
			speaker.hide();
	});

	$('.speaker').click(function(){
		show_id = "#speaker" + $(this).parent().attr('id');
		current.hide();
		$(show_id).show();
		current = $(show_id);
	});

});

