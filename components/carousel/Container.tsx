import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

import "swiper/scss";
import "swiper/scss/effect-cube";

const Container = () => {
	return (
		<div className="carousel">
			<div className="slide-host">
				<Swiper
					spaceBetween={0}
					slidesPerView={1}
					modules={[EffectCube, Autoplay]}
					effect="cube"
					cubeEffect={{
						slideShadows: false,
						shadow: false,
					}}
					autoplay={{ delay: 4000 }}
					autoHeight={true}
					allowTouchMove={false}
					loop={true}
					loopAdditionalSlides={3}
					speed={500}>
					<SwiperSlide>
						<Slide1 />
					</SwiperSlide>
					<SwiperSlide>
						<Slide2 />
					</SwiperSlide>
					<SwiperSlide>
						<Slide3 />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Container;
