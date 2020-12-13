<?php  

if (isset($_POST['btn'])) {
	$name = $_POST['name'];
	$msg = $_POST['msg'];

	$error_empty=false;
	$error_length = false;
	$empty_message = false;
	$empty_name = false;

	if (empty($name) || empty($msg)) {
		echo "<span id='form-error'> please fill all the fields </span>";
		
		$error_empty=true;

	}

	if (empty($name)) {
		$empty_name = true;
	}

	if (empty($msg)) {
		$empty_message = true;
	}

	if (!empty($name) && !empty($msg) && strlen($msg)<100) {
		echo "<span id='form-success'> Feedback Recorded </span>";
		
		

	}

	if (strlen($msg)>100) {
		echo "<span id='form-error'> message has to be of 100 words and less</span>";
		$error_length = true;
	}

}
else{
echo "There was an error";

}

?>

<script type="text/javascript">


			

	$("#myname, #suggestion").removeClass("input-error");
	var errorEmpty = "<?php echo $error_empty; ?>";
	var errorLength = "<?php echo $error_length; ?>";
	var errorMsg = "<?php echo $msg; ?>";
	var user = "<?php echo $name; ?>";
	var emptyName = "<?php echo $empty_name; ?>";
	var emptyMessage = "<?php echo $empty_message; ?>";
	const database = firebase.database().ref("Feedback/" + user);
	console.log(errorMsg);
	if (emptyName==false && emptyMessage == false && errorLength == false) {
		database.set({
			message:errorMsg, 
			stars: val
				});

		console.log(val);
	}
	if (emptyName == true) {
		$("#myname").addClass("input-error");
	}

	if (emptyMessage == true) {
		$("#suggestion").addClass("input-error");
	}
	if (errorLength == true) {
		$("#suggestion").addClass("input-error");	
	}

	if(errorEmpty == false){
	$("#suggestion").val("");	
	}
</script>