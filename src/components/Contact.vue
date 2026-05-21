<script setup>
	import { ref } from 'vue';

	import { Notyf } from 'notyf';
	import 'notyf/notyf.min.css';

	const notyf = new Notyf();


	const WEB3FORMS_ACCESS_KEY = "191747e6-4adc-4d6c-bd52-24c01d6f158f";

	const subject = "New message from Portfolio Contact Form";

	const name = ref("");
	const email = ref("");
	const message = ref("");

	const isLoading = ref(false);


	const submitForm = async() => {

		isLoading.value = true;

		try {

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: subject,
					name: name.value,
					email: email.value,
					message: message.value
				})
			});

			const result = await response.json();

			if(result.success) {
				console.log(result)

				isLoading.value = false;
				notyf.success("Message sent!");
			}

		} catch(error) {
			console.log(error);

			isLoading.value = false;
			notyf.error("Failed to send message");
		}
	}

</script>


<template>
	            <!-- contact -->
	            <h1 class="text-center my-4 pt-5" id="contact">Contact</h1>
	            <div class="contact-section">
	                <div class="row align-items-center mt-4">
	                    <div class="col-md-6 map-container">
	                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=centro%20escolar%20university%20manila&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
	                    </div>
	                    <div class="col-md-6">
	                        <form @submit.prevent="submitForm">
	                            <div class="mb-3">
	                                <input type="text" v-model="name" class="form-control contact-form-control" placeholder="First Name M.I. Last Name">
	                            </div>
	                            <div class="mb-3">
	                                <input type="email" v-model="email" class="form-control contact-form-control" placeholder="Email">
	                            </div>
	                            <div class="mb-3">
	                                <textarea v-model="message" class="form-control contact-form-control" rows="6" placeholder="Message"></textarea>
	                            </div>
	                            <div class="form-footer">
	                                <div class="social-icons">
	<!--                                <a href="https://www.facebook.com/profile.php?id=100085701498879" id="facebook"><i class="fab fa-facebook"></i></a> -->
	                                    <a href="https://www.linkedin.com/in/charles-babbage-8291a6211/" id="linkedin"><i class="fab fa-linkedin"></i></a>
	                                    <a href="https://gitlab.com/cbabbage0991" id="gitlab"><i class="fab fa-gitlab"></i></a>
	                                    <a href="https://github.com/cbabbage0991" id="github"><i class="fab fa-github"></i></a>
	                                </div>
	                                <button type="submit" class="submit-btn pl-5 pr-5" :disabled="isLoading">{{isLoading ? "Sending..." : "Submit"}}</button>
	                            </div>
	                        </form>
	                        
	                    </div>
	                </div>
	            </div>
</template>