<template>
  <div>
    <tahrirlash size="sm" ref="tahrirlash">
      <template #header>
        <input type="text" value="lorem" />
      </template>
      <template #footer>
        <button class="btn btn-success text-capitalize" >close</button>
      </template>
    </tahrirlash>

    <div class="hodimlar">
      <div class="hodimlar_content">
        <div class="hodimlar_content_title text-uppercase">hodimlar</div>
        <div class="items">
          <div class="hodim_content card" v-for="item in 8" :key="item">
            <div class="card-body">
              <h5
                class="content_item item_2 card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                valiyev valijon
              </h5>

              <h5
                class="content_item card-title text-capitalize d-flex justify-content-between align-items-center"
              >
                <span>tel: </span>+998-94-283-60-06
              </h5>

              <div
                class="card_content_btn text-bg-success d-flex align-items-center justify-content-center text-uppercase btn"
              >
                tahrirlash
              </div>
            </div>
          </div>
        </div>
        <div class="paginations d-flex justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">1</a>
              </li>
              <li class="page-item" aria-current="page">
                <span class="page-link">2</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
          <select class="form-select" aria-label="Default select example">
            <option selected>10</option>
            <option value="1">20</option>
            <option value="2">50</option>
            <option value="3">100</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import tahrirlash from "../../components/tahrirlash.vue";
import { info } from 'sass';
export default {
  data() {
    return {};
  },
  components: {
    tahrirlash,
  },
  methods:{
    tekshiruv(){
      Swal.fire({
						title: 'Buyurtma cheki chiqarilsinmi?',
            icon: "success",
						showCancelButton: true,
						confirmButtonText: 'Xa',
						cancelButtonText: "Yo'q",
            position:"bottom-right"
					}).then((result) => {
						if (result.isConfirmed) {
          console.log(result);
						} else {
              console.log("yo'q");
						}

				
					});
    }
  }
};
</script>
  
  <style lang="scss" scopd>
</style>