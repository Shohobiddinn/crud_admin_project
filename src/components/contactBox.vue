<template>
	<div class="contact">
		<div class="title-box">
			<svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="45"
                viewBox="0 0 39 45"
                fill="none"
              >
                <path
                  d="M37.4581 1.17455L37.7095 0.5H36.9896H18.0196H17.6723L17.5511 0.825445L1.53146 43.8255L1.28015 44.5H2H20.97H21.3173L21.4385 44.1746L37.4581 1.17455Z"
                  stroke="white"
                />
              </svg>
			<h3 class="contact_title">Biz bilan bog'lanish</h3>
		</div>
		<div class="">
			<div class="contact_box mx-auto d-flex col-12">
				<div class="contact_social-networks social  col-md-6 col-xl-3 text-center align-items-center">
					<div class="social_box mx-md-auto">
						<p class="social_title">Ijtimoiy tarmoqlar</p>
						<i class="fa-solid fa-house"></i>
					</div>
					<div class="social_box">
						<p class="social_title">Telefon raqam:</p>
						<a class="social_phone" href="tel:+998335090901"
							>+998(33)509-09-01</a
						>
					</div>
					<div class="social_box">
						<p class="social_title">Email manzil:</p>
						<a class="social_phone" href="mailto:cruddev1@gmail.com"
							>cruddev1@gmail.com</a
						>
					</div>
				</div>
				<div class="contact_location">
					<p class="social_title">Bizning manzil:</p>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.93708993720526!2d71.786022984421!3d40.38683802209946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb836751654afb%3A0x616156310421e28a!2z0JjQvdGC0LXRgNC90LXRgi3QutCw0YTQtSBTYXl0ZXg!5e0!3m2!1sru!2s!4v1699867545553!5m2!1sru!2s"
						width="600"
						height="230"
						allowfullscreen="true"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<div class="contact_wrap">
					<form class="contact_form" @submit.prevent="send()">
						<input
							type="text"
							class="name_input form_input w-100"
							placeholder="Ism familiyangiz"
							v-model="body.name"
							required
						/>
						<input
							type="text"
							class="phone_input form_input w-100"
							placeholder="Telefon raqamingiz"
							v-model="body.phone"
							required
						/>
						<button class="form_btn" type="submit">Yuborish</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			body: {
				name: '',
				phone: '',
			},
		};
	},
	methods: {
		send() {
			var token = '6146035802:AAGAtq5EKYTQqgXW3Ffd7ca0aTDg1K_ewus';
			var chat_id = 1989961079;
			var url = `https://api.telegram.org/bot${token}/sendMessage`;
			let message = '';
			message += `<b>Yangi mijoz:</b>\n<b>Ismi: </b>${this.body.name}\n`;
			message += `<b>Telefon raqami: </b>${this.body.phone}\n`;

			axios
				.post(url, {
					chat_id: chat_id,
					parse_mode: 'html',
					text: message,
				})
				.then((res) => {
					alert("Jo'natildi");
				});
		},
	},
};
</script>
<style></style>
