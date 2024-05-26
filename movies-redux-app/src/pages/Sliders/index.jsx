// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDeleteMovieMutation, useGetMoviesQuery } from "../../features/movie/movieQuerySlice"
import DetailPage from '../DetailPage';

const Sliders = () => {
    const { data: movies } = useGetMoviesQuery();
    const [deleteOne, { isError, isSuccess }] = useDeleteMovieMutation();
    // console.log(getOneMovie)
    // console.log(getMovie);
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {movies && movies.map((movie) => {
                    return <SwiperSlide key={movie.id}>
                        <div>
                            <img style={{ width: '400px', height: '600px' }} src={movie.posterImg} alt={movie.title} />

                            <button onClick={() => { DetailPage(movie.id) }}>Detail</button>
                            <button onClick={async () => {
                                console.log("clickd");
                                await deleteOne(movie.id);

                            }}>Delete</button>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>

        </>
    )
}

export default Sliders