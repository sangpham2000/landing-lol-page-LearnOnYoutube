import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import { EffectFade, Pagination, Mousewheel } from 'swiper'

import { Welcome, Champion, ChampionDetail, Trailer, Credit } from '../components/home-section'

import { championsData } from '../assets/dummy'

const Home = () => {
    return (
        <React.Fragment>
            <Swiper
                modules={[EffectFade, Pagination, Mousewheel]}
                mousewheel={true}
                pagination={true}
                slidesPerView={1}
                spaceBetween={0}
                effect="fade"
            >
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit isActive={isActive} />}
                </SwiperSlide>
            </Swiper>
            {
                championsData.map((item, index) => (
                    <ChampionDetail
                        key={index}
                        item={item}
                        id={index}
                    />
                ))
            }
            <div className="scroll">
                <span>Scroll to see effect</span>
            </div>
        </React.Fragment>
    )
}

export default Home