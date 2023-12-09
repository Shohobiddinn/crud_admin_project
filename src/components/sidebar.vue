<template>
	<div class="side-nav">
		<nav class="navigate">
			<ul class="navigate_list">
				<li class="navigate_item">
					<RouterLink @click="activeFunc()" class="navigate_link" to="/about"
						>Biz haqimizda</RouterLink
					>
				</li>
				<li class="navigate_item"><b>.</b></li>

				<li class="navigate_item">
					<RouterLink
						@click="activeFunc()"
						class="navigate_link"
						to="/connection"
						>Aloqa uchun</RouterLink
					>
				</li>
				<li class="navigate_item"><b>.</b></li>

				<li class="navigate_item">
					<RouterLink @click="activeFunc()" to="/">
						<img class="navigate_img" src="../assets/images/Logo.png" alt="" />
					</RouterLink>
				</li>

				<li class="navigate_item">
					<RouterLink @click="activeFunc()" class="navigate_link" to="/faq"
						>FAQ</RouterLink
					>
				</li>
				<li class="navigate_item"><b>.</b></li>

				<li class="navigate_item">
					<RouterLink @click="activeFunc()" class="navigate_link" to="/videos"
						>Video qo'llanmalar</RouterLink
					>
				</li>
			</ul>
		</nav>
		<div class="home-sidebar_navbar">
			<div class="d-flex justify-content-between py-4">
				<RouterLink @click="activeFunc()" to="/">
					<img
						class="home-sidebar__img"
						src="/src/assets/images/Crud.svg"
						alt=""
						width="169"
						height="35"
					/>
				</RouterLink>
				<button class="sidebar-btn" type="button" @click="openRight()">
					<i class="fa-solid fa-arrow-left text-white"></i>
				</button>
				<nav class="home-sidebar__nav">
					<button class="sidebar-btn" type="button" @click="openRight()">
						<i class="fa-solid fa-arrow-left text-white"></i>
					</button>
					<ul class="home-sidebar__list">
						<li class="home-sidebar__item">
							<RouterLink @click="activeFunc()" to="/">
								<img
									class="home-sidebar__img"
									src="/src/assets/images/Crud.svg"
									alt=""
								/>
							</RouterLink>
						</li>
						<li class="home-sidebar__item">
							<RouterLink
								@click="activeFunc()"
								class="home-sidebar__link"
								to="/about"
								>Biz haqimizda</RouterLink
							>
						</li>

						<li class="home-sidebar__item">
							<RouterLink
								@click="activeFunc()"
								class="home-sidebar__link"
								to="/connection"
								>Aloqa uchun</RouterLink
							>
						</li>

						<li class="home-sidebar__item">
							<RouterLink
								@click="activeFunc()"
								class="home-sidebar__link"
								to="/faq"
								>FAQ</RouterLink
							>
						</li>

						<li class="home-sidebar__item">
							<RouterLink
								@click="activeFunc()"
								class="home-sidebar__link"
								to="/videos"
								>Video qo'llanmalar</RouterLink
							>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'sidebar',
	data() {
		return {
			isNavbarOpen: false,
		};
	},
	methods: {
		activeFunc() {
			const item = document.querySelectorAll('a');
			item.classList.remove('active');
			item.classList.add('active');
			document
				.querySelector('.home-sidebar_navbar')
				.classList.remove('open-sidebar');
			this.isNavbarOpen = !this.isNavbarOpen;

			if (this.isNavbarOpen) {
				this.disableBodyScroll();
			} else {
				this.enableBodyScroll();
			}
		},
		openRight() {
			document
				.querySelector('.home-sidebar_navbar')
				.classList.toggle('open-sidebar');
			this.isNavbarOpen = !this.isNavbarOpen;

			if (this.isNavbarOpen) {
				this.disableBodyScroll();
			} else {
				this.enableBodyScroll();
			}
		},
		disableBodyScroll() {
			document.body.classList.add('no-scroll');
		},
		enableBodyScroll() {
			document.body.classList.remove('no-scroll');
		},
	},
};
</script>
<style></style>
