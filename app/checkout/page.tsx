'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-white p-8">
      <Swiper
        pagination={{
          type: 'bullets',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-4">Smart water filter system</h1>
            <p className="text-gray-600 mb-4">Advanced filtration with eco-friendly materials</p>
            <div className="text-yellow-400 text-2xl mb-4">4.0/5.0</div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-4">Our Global Impact</h2>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="text-lg font-bold">2.5M</h3>
                  <p className="text-gray-600">Kg CO₂ Saved</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">1.2M</h3>
                  <p className="text-gray-600">L Water Preserved</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">500K+</h3>
                  <p className="text-gray-600">Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Solar solutions</h3>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Water conservation</h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center p-8">
            <h2 className="text-xl font-semibold mb-4">Top Rated Solutions</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Smart Solar Panel</h3>
                <p className="text-gray-600">$299</p>
                <div className="text-yellow-400 text-xl">4.8</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-bold">Water Filter</h3>
                <p className="text-gray-600">$199</p>
                <div className="text-yellow-400 text-xl">4.0</div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CheckoutPage;