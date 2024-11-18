// data

 import {Swiper, SwiperSlide} from 'swiper/react';
 import 'swiper/css';
 import 'swiper/css/free-mode';
 import 'swiper/css/pagination';
  import {
    RxCrop,
  
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxArrowTopRight,
    RxSpaceBetweenHorizontally,
  }from 'react-icons/rx';
  import {FreeMode, pagination} from 'swiper';
  const serviceData = [
    {
      icon: <RxPencil2 />,
      title: 'Design',
      description: ' Website ,App ,Presention Card and portfolio  ',
    },
    {
      icon: <RxDesktop />,
      title: 'Development',
      description: 'Front(Blazor/React) , Back(.Net Core) , SqlServer ',
    },
    {
      icon: <RxCrop />,
      title: 'Marketing',
      description: 'marketing or plannig for your app contact me',
    },
    {
      icon: <RxReader />,
      title: 'Article',
      description: 'writing Scientific Article and etc about comp eng ',
    },
    {
      icon: <RxRocket />,
      title: 'SEO',
      description: 'Search engine optimazation for your websites',
    },
  ];

const ServiceSlider = () => {
  return (
    <Swiper
        breakpoints={{
          320: {
            slidesPerView:1,
            SpaceBetween:15,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        // modules={[FreeMode, pagination]}
        className='h-[240px] sm:h[340px]'
        >
          {
            serviceData.map((item,index)=> {

              return (
              <SwiperSlide key={index}>
                <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 mt-[70px] xl:mt-0 sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer
                hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 '>

                  <div className=' text-4xl text-accent mb-4 '>{item.icon}</div>

                  <div className='mb-8'>
                    <div className=' mb-2 text-lg'>{item.title}</div>
                    <p className=' max-w-[350px] leading-normal'>
                      {item.description}
                      </p>
                  </div>

                  <div className='text-3xl'>
                    <RxArrowTopRight className=' group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
                  </div>

                </div>
              </SwiperSlide>
              );
            })


          }
            
            
          
    </Swiper>
  );
};

export default ServiceSlider;
