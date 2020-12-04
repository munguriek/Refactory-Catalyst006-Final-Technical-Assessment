// $(document).ready(function() {
$(function () {
	// MESSAGE TO CONFIRM DATA SUBMISSION
	$('#data').submit(function () {
		$("#message").empty().text("Processing Request...");
		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$("#message").empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});
});