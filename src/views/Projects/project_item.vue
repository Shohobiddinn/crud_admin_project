<template>
  <div class="background">
    <div class="home-pc">
      <sidebar />
      <div class="heros">
        <div class="container">
          <div class="hero__box">
            <h3
              class="hero__title title1"
              v-if="!bannerTitle.bir"
              @click="bannerBir()"
            >
              {{ introFooter[7]?.text }}
            </h3>
            <input
              v-else
              type="text"
              cols="30"
              rows="4"
              :value="introFooter[7]?.text"
              @change="updateBanner($event, introFooter[7])"
              style="width: 90%"
            />
            <h3
              class="hero__title title1 text-warning"
              v-if="!bannerTitle.sakkiz"
              @click="bannerSakkiz()"
            >
              {{ introFooter[6]?.text }}
            </h3>
            <input
              v-else
              type="text"
              cols="30"
              rows="4"
              :value="introFooter[6]?.text"
              @change="updateBanner($event, introFooter[6])"
              style="width: 90%"
            />
          </div>
        </div>
      </div>
      <div class="intro_left" :class="{ active: showLeft }">
        <div
          class="sidebar-btn d-flex align-items-center justify-content-center"
          @click="showTitleLeft()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="14"
            fill="#fff"
            viewBox="0 0 448 512"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
        <div class="intro_left_title">
          <div
            class="intro_left_title"
            v-if="!bannerTitle.ikki"
            @click="bannerIkki"
          >
            {{ introFooter[5]?.text }}
          </div>
          <input
            v-else
            style="width: 250px"
            type="text"
            :value="introFooter[5]?.text"
            @change="updateBanner($event, introFooter[5])"
          />
        </div>
        <div class="content">
          <div class="content_link" @dblclick="routerBir()">
            <div class="content_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_f_6_159)">
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#0085FF"
                  />
                </g>
                <path
                  d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                  fill="#0085FF"
                />
                <defs>
                  <filter
                    id="filter0_f_6_159"
                    x="0.247059"
                    y="0.247059"
                    width="103.576"
                    height="103.576"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="18.3765"
                      result="effect1_foregroundBlur_6_159"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              class="content_title"
              v-if="!bannerTitle.tort"
              @click="bannerTort()"
            >
              {{ introFooter[3]?.text }}
            </div>
            <input
              v-else
              type="text"
              :value="introFooter[3]?.text"
              @change="updateBanner($event, introFooter[3])"
            />
            <div
              class="content_show"
              style="
                background: linear-gradient(180deg, #0085ff 0%, #0085ff 100%);
                box-shadow: 0 0 30px #0085ff;
              "
            ></div>
          </div>
        </div>
        <div class="content">
          <div class="content_link" @dblclick="routerBir()">
            <div class="content_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_f_6_159)">
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#FFB800"
                  />
                </g>
                <path
                  d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                  fill="#FFB800"
                />
                <defs>
                  <filter
                    id="filter0_f_6_159"
                    x="0.247059"
                    y="0.247059"
                    width="103.576"
                    height="103.576"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="18.3765"
                      result="effect1_foregroundBlur_6_159"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              class="content_title"
              @click="bannerBesh()"
              v-if="!bannerTitle.besh"
            >
              {{ introFooter[2]?.text }}
            </div>
            <input
              v-else
              type="text"
              :value="introFooter[2]?.text"
              @change="updateBanner($event, introFooter[2])"
            />

            <div
              class="content_show"
              style="
                background: linear-gradient(180deg, #ffb800 0%, #ffb800 100%);
                box-shadow: 0 0 30px #ffb800;
              "
            ></div>
          </div>
        </div>
        <div class="content">
          <div class="content_link" @dblclick="routerBir()">
            <div class="content_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_f_6_159)">
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#00FF47"
                  />
                </g>
                <path
                  d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                  fill="#00FF47"
                />
                <defs>
                  <filter
                    id="filter0_f_6_159"
                    x="0.247059"
                    y="0.247059"
                    width="103.576"
                    height="103.576"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="18.3765"
                      result="effect1_foregroundBlur_6_159"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              class="content_title"
              @click="bannerOlti()"
              v-if="!bannerTitle.olti"
            >
              {{ introFooter[1]?.text }}
            </div>
            <input
              v-else
              type="text"
              :value="introFooter[1]?.text"
              @change="updateBanner($event, introFooter[1])"
            />

            <div
              class="content_show"
              style="
                background: linear-gradient(180deg, #00ff47 0%, #00ff47 100%);
                box-shadow: 0 0 30px #00ff47;
              "
            ></div>
          </div>
        </div>
        <div class="content">
          <div class="content_link" @dblclick="routerBir()">
            <div class="content_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_f_6_159)">
                  <path
                    d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                    fill="#AD00FF"
                  />
                </g>
                <path
                  d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                  fill="#AD00FF"
                />
                <defs>
                  <filter
                    id="filter0_f_6_159"
                    x="0.247059"
                    y="0.247059"
                    width="103.576"
                    height="103.576"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="18.3765"
                      result="effect1_foregroundBlur_6_159"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div
              class="content_title"
              v-if="!bannerTitle.yetti"
              @click="bannerYetti()"
            >
              {{ introFooter[0]?.text }}
            </div>
            <input
              v-else
              type="text"
              :value="introFooter[0]?.text"
              @change="updateBanner($event, introFooter[0])"
            />

            <div
              class="content_show"
              style="
                background: linear-gradient(180deg, #ad00ff 0%, #ad00ff 100%);
                box-shadow: 0 0 30px #ad00ff;
              "
            ></div>
          </div>
        </div>
        <div>
          <div
            class="intro_top_content"
            v-if="!bannerTitle.uch"
            style="cursor: pointer; user-select: none"
          >
            <div
              class="intro_top_content_title"
              @click="bannerUch"
              @dblclick="routerBir"
            >
              {{ introFooter[4]?.text }}
            </div>
            <div class="intro_top_content_icon">
              <svg
                width="25"
                height="44"
                viewBox="0 0 25 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H3.87931L25 22L3.87931 44H0L21.1207 22L0 0Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <input
            v-else
            type="text"
            :value="introFooter[4]?.text"
            style="width: 250px; font-size: 14px"
            @change="updateBanner($event, introFooter[4])"
          />
        </div>
      </div>
      <div class="intro bottom-0">
        <div class="container">
          <div class="intro_top">
            <div class="intro_top_title">
              <div
                class="intro_top_title"
                v-if="!bannerTitle.ikki"
                @click="bannerIkki"
              >
                {{ introFooter[5]?.text }}
              </div>
              <input
                v-else
                style="width: 250px"
                type="text"
                :value="introFooter[5]?.text"
                @change="updateBanner($event, introFooter[5])"
              />
            </div>
            <div>
              <div
                class="intro_top_content"
                v-if="!bannerTitle.uch"
                style="cursor: pointer; user-select: none"
              >
                <div
                  class="intro_top_content_title"
                  @click="bannerUch"
                  @dblclick="routerBir"
                >
                  {{ introFooter[4]?.text }}
                </div>
                <div class="intro_top_content_icon">
                  <svg
                    width="25"
                    height="44"
                    viewBox="0 0 25 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H3.87931L25 22L3.87931 44H0L21.1207 22L0 0Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <input
                v-else
                type="text"
                :value="introFooter[4]?.text"
                style="width: 250px; font-size: 14px"
                @change="updateBanner($event, introFooter[4])"
              />
            </div>
          </div>
          <div class="intro_bottom">
            <div class="content">
              <div class="content_link" @dblclick="routerBir()">
                <div class="content_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_6_159)">
                      <path
                        d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                        fill="#0085FF"
                      />
                    </g>
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#0085FF"
                    />
                    <defs>
                      <filter
                        id="filter0_f_6_159"
                        x="0.247059"
                        y="0.247059"
                        width="103.576"
                        height="103.576"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.3765"
                          result="effect1_foregroundBlur_6_159"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div
                  class="content_title"
                  v-if="!bannerTitle.tort"
                  @click="bannerTort()"
                >
                  {{ introFooter[3]?.text }}
                </div>
                <input
                  v-else
                  type="text"
                  :value="introFooter[3]?.text"
                  @change="updateBanner($event, introFooter[3])"
                />
                <div
                  class="content_show"
                  style="
                    background: linear-gradient(
                      180deg,
                      #0085ff 0%,
                      #0085ff 100%
                    );
                    box-shadow: 0 0 30px #0085ff;
                  "
                ></div>
              </div>
            </div>
            <div class="content">
              <div class="content_link" @dblclick="routerBir()">
                <div class="content_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_6_159)">
                      <path
                        d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                        fill="#FFB800"
                      />
                    </g>
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#FFB800"
                    />
                    <defs>
                      <filter
                        id="filter0_f_6_159"
                        x="0.247059"
                        y="0.247059"
                        width="103.576"
                        height="103.576"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.3765"
                          result="effect1_foregroundBlur_6_159"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div
                  class="content_title"
                  @click="bannerBesh()"
                  v-if="!bannerTitle.besh"
                >
                  {{ introFooter[2]?.text }}
                </div>
                <input
                  v-else
                  type="text"
                  :value="introFooter[2]?.text"
                  @change="updateBanner($event, introFooter[2])"
                />

                <div
                  class="content_show"
                  style="
                    background: linear-gradient(
                      180deg,
                      #ffb800 0%,
                      #ffb800 100%
                    );
                    box-shadow: 0 0 30px #ffb800;
                  "
                ></div>
              </div>
            </div>
            <div class="content">
              <div class="content_link" @dblclick="routerBir()">
                <div class="content_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_6_159)">
                      <path
                        d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                        fill="#00FF47"
                      />
                    </g>
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#00FF47"
                    />
                    <defs>
                      <filter
                        id="filter0_f_6_159"
                        x="0.247059"
                        y="0.247059"
                        width="103.576"
                        height="103.576"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.3765"
                          result="effect1_foregroundBlur_6_159"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div
                  class="content_title"
                  @click="bannerOlti()"
                  v-if="!bannerTitle.olti"
                >
                  {{ introFooter[1]?.text }}
                </div>
                <input
                  v-else
                  type="text"
                  :value="introFooter[1]?.text"
                  @change="updateBanner($event, introFooter[1])"
                />

                <div
                  class="content_show"
                  style="
                    background: linear-gradient(
                      180deg,
                      #00ff47 0%,
                      #00ff47 100%
                    );
                    box-shadow: 0 0 30px #00ff47;
                  "
                ></div>
              </div>
            </div>
            <div class="content">
              <div class="content_link" @dblclick="routerBir()">
                <div class="content_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="104"
                    height="104"
                    viewBox="0 0 104 104"
                    fill="none"
                  >
                    <g filter="url(#filter0_f_6_159)">
                      <path
                        d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                        fill="#AD00FF"
                      />
                    </g>
                    <path
                      d="M67.0706 52.0353C67.0706 60.3391 60.3391 67.0706 52.0353 67.0706C43.7315 67.0706 37 60.3391 37 52.0353C37 43.7315 43.7315 37 52.0353 37C60.3391 37 67.0706 43.7315 67.0706 52.0353ZM43.3746 52.0353C43.3746 56.8185 47.2521 60.696 52.0353 60.696C56.8185 60.696 60.696 56.8185 60.696 52.0353C60.696 47.2521 56.8185 43.3746 52.0353 43.3746C47.2521 43.3746 43.3746 47.2521 43.3746 52.0353Z"
                      fill="#AD00FF"
                    />
                    <defs>
                      <filter
                        id="filter0_f_6_159"
                        x="0.247059"
                        y="0.247059"
                        width="103.576"
                        height="103.576"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="18.3765"
                          result="effect1_foregroundBlur_6_159"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div
                  class="content_title"
                  v-if="!bannerTitle.yetti"
                  @click="bannerYetti()"
                >
                  {{ introFooter[0]?.text }}
                </div>
                <input
                  v-else
                  type="text"
                  :value="introFooter[0]?.text"
                  @change="updateBanner($event, introFooter[0])"
                />

                <div
                  class="content_show"
                  style="
                    background: linear-gradient(
                      180deg,
                      #ad00ff 0%,
                      #ad00ff 100%
                    );
                    box-shadow: 0 0 30px #ad00ff;
                  "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "../../components/sidebar.vue";
import api from "../../server/api";
export default {
  name: "Intro",
  data() {
    return {
      showLeft: false,
      breakPoints: {
        320: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        500: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        700: {
          itemsToShow: 2,
          snapAlign: "center",
        },
        900: {
          itemsToShow: 3,
          snapAlign: "center",
        },

        1024: {
          itemsToShow: 4,
          snapAlign: "start",
        },
      },
      forServise: [
        {
          color: "#0085FF",
          title: "Savdo hozmaglar uchun",
          path: "/xozmag",
        },
        {
          color: "#FFB800",
          title: "Qurilish davlat obyektlari uchun",
          path: "/structure",
        },
        {
          color: "#00FF47",
          title: "Ishlab chiqarish",
          path: "/manufacture",
        },
        {
          color: "#AD00FF",
          title: "Qurilish mahsulotlarini ishlab chiqarish",
          path: "/output",
        },
      ],
      params: {
        id: 7,
      },
      introFooter: [],
      bannerTitle: {
        bir: false,
        ikki: false,
        uch: false,
        tort: false,
        besh: false,
        olti: false,
        yetti: false,
        sakkiz: false,
      },
      banner_data: {
        category_item_id: 0,
        text: "",
      },
    };
  },
  components: { sidebar, },
  methods: {
    showTitleLeft() {
      this.showLeft = !this.showLeft;
    },
    getIntroBanner() {
      api
        .category_one(this.params)
        .then((res) => {
          this.introFooter = res.data.category_items;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    // banner title function
    bannerBir() {
      setTimeout(() => {
        this.bannerTitle.bir = true;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerIkki() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = true;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerUch() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = true;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerTort() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = true;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerBesh() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = true;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerOlti() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = true;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerYetti() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = true;
        this.bannerTitle.sakkiz = false;
      }, 1000);
    },
    bannerSakkiz() {
      setTimeout(() => {
        this.bannerTitle.bir = false;
        this.bannerTitle.ikki = false;
        this.bannerTitle.uch = false;
        this.bannerTitle.tort = false;
        this.bannerTitle.besh = false;
        this.bannerTitle.olti = false;
        this.bannerTitle.yetti = false;
        this.bannerTitle.sakkiz = true;
      }, 1000);
    },
    // banner title update put
    updateBanner(event, item) {
      (this.banner_data.category_item_id = item.id),
        (this.banner_data.text = event.target.value);
      api
        .category_item_update(this.banner_data)
        .then((res) => {
          this.$util.toastError("success", "Amaliyot bajarildi");
          this.getIntroBanner();
          this.bannerTitle.bir = false;
          this.bannerTitle.ikki = false;
          this.bannerTitle.uch = false;
          this.bannerTitle.tort = false;
          this.bannerTitle.besh = false;
          this.bannerTitle.olti = false;
          this.bannerTitle.yetti = false;
          this.bannerTitle.sakkiz = false;
        })
        .catch((err) => {
          this.$util.toastError("error", "Ma'lumotni yuklab bo'lmadi");
        });
    },
    // router function
    routerBir() {
      this.$router.push("/home");
    },
  },
  created() {
    this.getIntroBanner();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
