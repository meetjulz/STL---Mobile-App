$(document).ready(function(){
	const gameType = $("#gameType");
	const combiField = $("input[name='combination']");
	const betAmountField = $("input[name='bet-amount']");

	let gameTypeLength = 0;
	let currentField = combiField;
	let nextField = betAmountField;

	let currentGameType = '';


	let bet = [];


	$(gameType).change(function() {
		currentGameType = $(this).val();
		currentField.val('');
		nextField.val('');
    	gameTypeLength =  $(this).children("option").filter(":selected").attr("length"); 
    	alert(currentGameType);
    });

	$(".input-buttons button.num").click(function(){
		let field = ( !isMaxLength( currentField ) ) ? currentField : nextField;
		field.val( field.val() + $(this).val() );
	});

	$(".input-buttons button.del").click(function(){
		let field = ( nextField.val().length > 0 ) ? nextField : currentField;
		let value = field.val();
		field.val( value.substring( 0, value.length-1) );
	});


	// FUNCTIONS

	function isBet() {
		const gameType = $("#gameType option:selected" ).text();
	}
	function isMaxLength( field ) {
		return ( field.val().length == gameTypeLength );
	}
	function getDateToday() {
        const today = new Date();
        const month = today.toLocaleString('default', { month: 'long' });
        const date = month + " " + today.getDate() + ", " + today.getFullYear();
        $(".date p").html(date);
    }
    getDateToday();


//    SUNMI

    $(".btn.print").click(function(){
        const msg = "Welcome to Sunmi";
        Javascript: lee.funAndroid(a);
        Return false;
    });

});

