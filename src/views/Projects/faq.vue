<template>
	<div class="faq">
		<div class="container-c">
			<sidebar />
			<div class="title-box">
				<img src="/src/assets/images/slash.svg" alt="" />
				<h3 class="contact_title">Ko'p beriladigan savollar</h3>
			</div>
			<div class="faq_box">
				<div class="faq_item item1">
					<p class="faq_question">
						Dastur bitsayu uni qanday ishga tushirman ?
					</p>
					<p class="faq_answer">
						Dasturni ishga tushirish uchun maxsus hodim biriktiriladi
					</p>
				</div>
				<div class="faq_item item2">
					<p class="faq_question">
						Dastur ishga tushdi, qabul qilib oldik malum vaqtdan keyin ishlamay
						qoldi! Endi nima bo'ladi ?
					</p>
					<p class="faq_answer">
						Dastur ichida ,,foydalanish video instruksiyasi'' mavjud bo'lib u
						yerda video qo'llanma orqali boshlang'ich ko'nikmalarni olishi
						mumkin. Telegramdagi yopiq guruh orqali tushunmagan narsalarini
						so'rashlari mumkin!
					</p>
				</div>
				<div class="faq_item item3">
					<p class="faq_question">
						Dastur ishga tushdi, xodimlarimda o'zgarish bo'ldi, boshqa bo'limga
						o'tdi, ishdan ketdi va h.k O'rniga boshqa xodim keldi, u hali
						dasturdan foydalanishni bilmaydi! Endi nima bo'ladi?
					</p>
					<p class="faq_answer">
						Dastur ichida ,,foydalanish video instruksiyasi'' mavjud bo'lib u
						yerda video qo'llanma orqali boshlang'ich ko'nikmalarni olishi
						mumkin. Telegramdagi yopiq guruh orqali tushunmagan narsalarini
						so'rashlari mumkin!
					</p>
				</div>
				<div class="faq_item item4">
					<p class="faq_question">
						Agar to'lov qilsam dastur ishlamasa nima bo'ladi?
					</p>
					<p class="faq_answer">Olingan to'lovni 100% qaytarib beramiz</p>
				</div>
				<div class="faq_item item5">
					<p class="faq_question">
						Dastur ishga tushdi, qabul qilib oldik malum vaqtdan keyin ishlamay
						qoldi! Endi nima bo'ladi ?
					</p>
					<p class="faq_answer">
						Dastur ichida ,,foydalanish video instruksiyasi'' mavjud bo'lib u
						yerda video qo'llanma orqali boshlang'ich ko'nikmalarni olishi
						mumkin. Telegramdagi yopiq guruh orqali tushunmagan narsalarini
						so'rashlari mumkin!
					</p>
				</div>
				<div class="faq_item item6">
					<p class="faq_question">
						Bularning barchasini menga kim kafolatlaydi?
					</p>
					<p class="faq_answer">
						Korxonangiz va bizning ,,CRUD Developer 'MChJ lar tuzgan shartnomaga
						asosan O'zbekiston Respublikasi qonunchiligi !'
					</p>
				</div>
			</div>
			<ContactBox />
		</div>
	</div>
</template>
<script>
import sidebar from '/src/components/sidebar.vue';
import ContactBox from '../../components/contactBox.vue';
export default {
	components: {
		sidebar,
		ContactBox,
	},
};
</script>
<style></style>
