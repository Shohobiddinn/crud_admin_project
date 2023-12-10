<template>
	<div class="background">
		<div class="container-c">
			<sidebar />
			<contactBox />
		</div>

	</div>
</template>
<script>
import sidebar from '/src/components/sidebar.vue';
import contactBox from '@/components/contactBox.vue';
export default {
	components: { sidebar, contactBox },
	name: 'Connection',
};
</script>
<style></style>
