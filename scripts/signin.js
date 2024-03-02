$(document).ready(function(){
    $('#signin-form').submit(function(e){
        e.preventDefault(); // Prevent form submission

        // Gather form data
        var formData = {
            email: $('#email').val(),
            password: $('#password').val()
        };

        // Send AJAX request
        $.ajax({
            type: 'POST',
            url: 'your_server_script.php', // 'your_server_script.php' script URL goes here 
            data: formData,
            success: function(response){
                // Handle successful response
                alert('Success! Server responded with: ' + response);
            },
            error: function(xhr, status, error){
                // Handle errors
                alert('Error occurred: ' + error);
            }
        });
    });
});

 