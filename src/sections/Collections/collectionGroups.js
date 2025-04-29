import categoryItems from "@/sections/Categories/categoryItems";

const collectionGroups = [
    {
        isActive: true,
        title: "Movies",
        items: [
            {
                title: "Our Genres",
                categoryItems,
                sliderParams: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        481: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1441: {
                            spaceBetween: 30,
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                            allowTouchMove: false,
                        }
                    }
                }
            },
            {
                title: "Popular Top 10 In Genres",
                categoryItems: [
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1.56,
                            slidesPerGroup: 1,
                        },
                        481: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1441: {
                            spaceBetween: 30,
                            allowTouchMove: false,
                        }
                    }
                }
            },
            {
                title: "Trending Now",
                movieItems: [
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        views: "3K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        duration: "1h 12m",
                        views: "4K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        duration: "1h 20m",
                        views: "13K"
                    },
                    {
                        title: "Pathan",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        duration: "2h 30m",
                        views: "1.2K"
                    },
                    {
                        title: "Iron man",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        duration: "1h 30m",
                        views: "5.12K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        views: "3K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        duration: "1h 12m",
                        views: "4K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        duration: "1h 20m",
                        views: "13K"
                    },
                    {
                        title: "Pathan",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        duration: "2h 30m",
                        views: "1.2K"
                    },
                    {
                        title: "Iron man",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        duration: "1h 30m",
                        views: "5.12K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        views: "3K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        duration: "1h 12m",
                        views: "4K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        duration: "1h 20m",
                        views: "13K"
                    },
                    {
                        title: "Pathan",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        duration: "2h 30m",
                        views: "1.2K"
                    },
                    {
                        title: "Iron man",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        duration: "1h 30m",
                        views: "5.12K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        views: "3K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        duration: "1h 12m",
                        views: "4K"
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        duration: "1h 20m",
                        views: "13K"
                    },
                    {
                        title: "Pathan",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        duration: "2h 30m",
                        views: "1.2K"
                    },
                    {
                        title: "Iron man",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        duration: "1h 30m",
                        views: "5.12K"
                    },
                ]
            },
            {
                title: "New Releases",
                movieItems: [
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/2.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/3.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/4.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/5.jpg",
                        released: {
                            label: "14 April 2023",
                            dataTime: "2023-04-14"
                        }
                    },
                ]
            },
            {
                title: "Must - Watch Movies",
                movieItems: [
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 0.2,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 0.9,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 1.2,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1.56,
                            slidesPerGroup: 1,
                        },
                        481: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1441: {
                            spaceBetween: 30,
                            allowTouchMove: false,
                        }
                    }
                }

            },
        ]
    },
    {
        isActive: false,
        title: "Shows",
        items: [
            {
                title: "Our Genres",
                categoryItems,
                sliderParams: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        481: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1441: {
                            spaceBetween: 30,
                            slidesPerView: 5,
                            slidesPerGroup: 5,
                            allowTouchMove: false,
                        }
                    }
                }
            },
            {
                title: "Popular Top 10 In Genres",
                categoryItems: [
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ],
                    },
                    {
                        title: 'Adventure',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/adventure/1.jpg',
                            '/src/assets/images/categories/adventure/2.jpg',
                            '/src/assets/images/categories/adventure/3.jpg',
                            '/src/assets/images/categories/adventure/4.jpg',
                        ]
                    },
                    {
                        title: 'Comedy',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/comedy/1.jpg',
                            '/src/assets/images/categories/comedy/2.jpg',
                            '/src/assets/images/categories/comedy/3.jpg',
                            '/src/assets/images/categories/comedy/4.jpg',
                        ]
                    },
                    {
                        title: 'Drama',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/drama/1.jpg',
                            '/src/assets/images/categories/drama/2.jpg',
                            '/src/assets/images/categories/drama/3.jpg',
                            '/src/assets/images/categories/drama/4.jpg',
                        ]
                    },
                    {
                        title: 'Action',
                        badge: "Top 10 In",
                        images: [
                            '/src/assets/images/categories/action/1.jpg',
                            '/src/assets/images/categories/action/2.jpg',
                            '/src/assets/images/categories/action/3.jpg',
                            '/src/assets/images/categories/action/4.jpg',
                        ]
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1.56,
                            slidesPerGroup: 1,
                        },
                        481: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1441: {
                            spaceBetween: 30,
                            allowTouchMove: false,
                        }
                    }
                }
            },
            {
                title: "Trending Shows Now",
                movieItems: [
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                ]
            },
            {
                title: "New Released Shows",
                movieItems: [
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 30m",
                        season: "5 Seasons",
                        href: '/show'
                    },
                ]
            },
            {
                title: "Must - Watch Movies",
                movieItems: [
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 0.2,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 0.9,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 1.2,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                    {
                        title: "Morbius",
                        imgSrc: "/src/assets/images/movies/1.jpg",
                        duration: "1h 12m",
                        rating: {
                            value: 4.6,
                            label: "20K"
                        }
                    },
                ],
                sliderParams: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                    breakpoints: {
                        0: {
                            spaceBetween: 10,
                            slidesPerView: 1.56,
                            slidesPerGroup: 1,
                        },
                        481: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        768: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1441: {
                            spaceBetween: 30,
                            allowTouchMove: false,
                        }
                    }
                }

            },
        ]
    }

]


export default collectionGroups

