document.getElementById('myForm').addEventListener('submit', function (event) {
	// Prevent form from submitting
	event.preventDefault();
  
	// Get form values
	const username = document.getElementById('username').value.trim();
	const email = document.getElementById('email').value.trim();
	const dob = document.getElementById('dob').value.trim();
	const password = document.getElementById('password').value.trim();
	const gender = document.querySelector('input[name="gender"]:checked');
	const country = document.getElementById('country').value;
	const errorMessage = document.getElementById('errorMessage');
  
	// Reset error message
	errorMessage.textContent = '';
	errorMessage.style.color = 'red';
  
	// Validation checks
	if (username === '' || username.length < 3) {
	  errorMessage.textContent = 'Username must be at least 3 characters long.';
	  return;
	}
  
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(email)) {
	  errorMessage.textContent = 'Please enter a valid email address.';
	  return;
	}
	 // Date of Birth Validation
	 if (!dob) {
		errorMessage.textContent = 'Please select your Date of Birth.';
		return;
	  }
	
	  const selectedDate = new Date(dob);
	  const today = new Date();
	  if (selectedDate > today) {
		errorMessage.textContent = 'Date of Birth cannot be in the future.';
		return;
	  }
	
	if (password.length < 8 || password.length > 16) {
	  errorMessage.textContent = 'Password must be 8-16 characters long.';
	  return;
	}
  
	if (!gender) {
	  errorMessage.textContent = 'Please select your gender.';
	  return;
	}
  
	if (country === '') {
	  errorMessage.textContent = 'Please select your country.';
	  return;
	}
  
	// If all validations pass
	errorMessage.style.color = 'Green';
	errorMessage.textContent = 'Form submitted successfully!';
  
	// Optional: Reset the form after submission
	document.getElementById('myForm').reset();
  
	// Additional action, like sending data to a server, can be added here
	console.log({
	  username,
	  email,
	  password,
	  gender: gender.value,
	  country,
	});
  
	// Display success alert
	alert('Form submitted successfully!');
  });
  // Handle form reset
document.querySelector('.button2 button[type="reset"]').addEventListener('click', function () {
	// Clear error message when reset button is clicked
	const errorMessage = document.getElementById('errorMessage');
	errorMessage.textContent = '';
  });