import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    categories: Category[] = [
        { id: 1, name: 'Smartphones' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Headphones' },
        { id: 4, name: 'Tablets' }
    ];

    products: Product[] = [
        // SMARTPHONES 
        {
            id: 1,
            name: 'iPhone 15 128GB',
            description: 'Apple smartphone',
            price: 499990,
            rating: 4.9,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-large'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-nanosim-esim-rozovyi-113137949/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 1
        },
        {
            id: 2,
            name: 'Samsung Galaxy S23',
            description: 'Samsung flagship smartphone',
            price: 345000,
            rating: 4.4,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h87/h65/69065034727454.jpg?format=gallery-large'],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 1
        },

        {
            id: 3,
            name: 'iPhone 17 Pro 256Gb',
            description: 'Apple smartphone',
            price: 845000,
            rating: 4.8,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 1
        },

        {
            id: 4,
            name: 'iPhone 16 128Gb',
            description: 'Apple smartphone',
            price: 492000,
            rating: 4.9,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 1
        },

        {
            id: 5,
            name: 'Samsung Galaxy S25 Ultra 5G',
            description: 'Samsung smartphone',
            price: 557000,
            rating: 4.6,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 1
        },


        // LAPTOPS 
        {
            id: 6,
            name: 'MacBook Air M1',
            description: 'Apple laptop',
            price: 549990,
            rating: 5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 2
        },

        {
            id: 7,
            name: 'MacBook Pro 16 2021',
            description: 'Apple laptop',
            price: 699990,
            rating: 4.5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 2
        },

        {
            id: 8,
            name: 'MacBook Air 13 2025',
            description: 'Apple laptop',
            price: 789990,
            rating: 4.7,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 2
        },

        {
            id: 9,
            name: 'MacBook Air 13 2022',
            description: 'Apple laptop',
            price: 569990,
            rating: 5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 2
        },

        {
            id: 10,
            name: 'MacBook Air 13 2022',
            description: 'Apple laptop',
            price: 589990,
            rating: 4.3,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p27/p41/16713243.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7w4ru-a-132429445/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 2
        },

        // HEADPHONES (5)

        {
            id: 11,
            name: 'Apple AirPods 4',
            description: 'Наушники Apple AirPods 4 белый',
            price: 65000,
            rating: 5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 3
        },
        {
            id: 12,
            name: 'pple AirPods 3 ',
            description: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
            price: 62000,
            rating: 4.8,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 3
        },
        {
            id: 13,
            name: 'Apple AirPods Max 2',
            description: 'Наушники Apple AirPods Max 2 черно-синий',
            price: 275000,
            rating: 5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 3
        },
        {
            id: 14,
            name: 'Apple AirPods Max 2',
            description: 'Наушники Apple AirPods Max 2 золотистый',
            price: 290000,
            rating: 4.9,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pa4/pd5/3527355.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-zolotistyi-128622709/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 0,
            categoryId: 3
        },
        {
            id: 15,
            name: 'Apple AirPods Max 2',
            description: 'Наушники Apple AirPods Max 2 синий',
            price: 280000,
            rating: 4.9,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p96/p5e/3537740.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-sinii-128625122/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC4O-g7BTvJQfdH5JTBPVCdCozEt2ztMz1dWTzU6WwIKchu-QJXFxYxoCpE4QAvD_BwE',
            likes: 4.5,
            categoryId: 3
        },

        // TABLETS (5)

        {
            id: 16,
            name: 'Apple iPad A16 11 2025',
            description: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
            price: 205000,
            rating: 4.7,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC9Cq9VjryRTBm0Uu9VV9XowuC1TbJsHt8fQjvDYdtTSEBrRjMum2CBoC5sMQAvD_BwE',
            likes: 0,
            categoryId: 4
        },
        {
            id: 17,
            name: 'Apple iPad Pro 11 2024',
            description: 'Планшет Apple iPad Pro 11 2024 Wi-Fi 11 дюйм 8 Гб/256 Гб черный',
            price: 512000,
            rating: 5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC9Cq9VjryRTBm0Uu9VV9XowuC1TbJsHt8fQjvDYdtTSEBrRjMum2CBoC5sMQAvD_BwE',
            likes: 0,
            categoryId: 4
        },
        {
            id: 18,
            name: 'Apple iPad Air 11 2025',
            description: 'Планшет Apple iPad Air 11 2025 Wi-Fi 11 дюйм 8 Гб/128 Гб серый',
            price: 325000,
            rating: 4.8,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC9Cq9VjryRTBm0Uu9VV9XowuC1TbJsHt8fQjvDYdtTSEBrRjMum2CBoC5sMQAvD_BwE',
            likes: 0,
            categoryId: 4
        },
        {
            id: 19,
            name: 'Xiaomi Redmi Pad 2',
            description: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб зеленый',
            price: 130000,
            rating: 4.1,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pa0/pb1/81440010.jpg?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-zelenyi-140640475/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC9Cq9VjryRTBm0Uu9VV9XowuC1TbJsHt8fQjvDYdtTSEBrRjMum2CBoC5sMQAvD_BwE',
            likes: 0,
            categoryId: 4
        },
        {
            id: 20,
            name: 'Samsung Galaxy Tab S10+',
            description: 'Планшет Samsung Galaxy Tab S10+ SM-X826BZSRSKZ 12.4 дюйм 12 Гб/256 Гб серебристый',
            price: 410000,
            rating: 4.5,
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p3e/p75/4296334.png?format=gallery-medium'],
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-sm-x826bzsrskz-12-4-djuim-12-gb-256-gb-serebristyi-128823968/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7iwPYUM2QHav5Qf3dhigYhzn&gclid=CjwKCAiA2PrMBhA4EiwAwpHyC9Cq9VjryRTBm0Uu9VV9XowuC1TbJsHt8fQjvDYdtTSEBrRjMum2CBoC5sMQAvD_BwE',
            likes: 0,
            categoryId: 4
        },
    ];



    getCategories() {
        return this.categories;
    }

    getProductsByCategory(categoryId: number) {
        return this.products.filter(p => p.categoryId === categoryId);
    }
}