

import shoe3 from '../assets/shoe3.jpg';
import shoe4 from '../assets/shoe4.jpg';
import shoe5 from '../assets/shoe5.jpg';
import shoe6 from '../assets/shoe6.jpg';
import shoe7 from '../assets/shoe7.jpg';
import shoe8 from '../assets/shoe8.jpg';
import shoe9 from '../assets/shoe9.jpg';
import shoe10 from '../assets/shoe10.jpg';
import shoe11 from '../assets/shoe11.jpg';
import shoe12 from '../assets/shoe12.jpg';
import shoe13 from '../assets/shoe13.jpg';
import shoe14 from '../assets/shoe14.jpg';
import shoe15 from '../assets/shoe15.jpg';
import shoe16 from '../assets/shoe16.jpg';
import shoe17 from '../assets/shoe17.jpg';
import shoe18 from '../assets/shoe18.jpg';
import shoe19 from '../assets/shoe19.jpg';
import shoe20 from '../assets/shoe20.jpg';
import shoe21 from '../assets/shoe21.jpg';
import shoe22 from '../assets/shoe22.jpg';
import shoe23 from '../assets/shoe23.jpg';
import shoe24 from '../assets/shoe24.jpg';
import shoe25 from '../assets/shoe25.jpg';
import shoe26 from '../assets/shoe26.jpg';
import shoe27 from '../assets/shoe27.jpg';
import shoe28 from '../assets/shoe28.jpg';
import shoe29 from '../assets/shoe29.jpg';
import shoe30 from '../assets/shoe30.jpg';
import shoe31 from '../assets/shoe31.jpg';
import shoe32 from '../assets/shoe32.jpg';
import shoe33 from '../assets/shoe33.jpg';
import shoe34 from '../assets/shoe34.jpg';
import shoe35 from '../assets/shoe35.jpg';
import shoe36 from '../assets/shoe36.jpg';
import shoe37 from '../assets/shoe37.jpg';
import shoe38 from '../assets/shoe38.jpg';
import shoe39 from '../assets/shoe39.jpg';
import shoe40 from '../assets/shoe40.jpg';



const productData = [
  { id: 1, name: 'ASF Shoe', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', newPrice: 60, category: 'Men' },
  { id: 2, name: 'Abros', image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww', newPrice: 65, category: 'Men' },
  { id: 3, name: 'AJANTA', image: shoe3, newPrice: 70, category: 'Men' },
  { id: 4, name: 'RapidBox', image: shoe4, newPrice: 75, category: 'Men' },
  { id: 5, name: 'aadi', image: shoe5, newPrice: 80, category: 'Men' },
  { id: 6, name: 'Abros', image: shoe6, newPrice: 85, category: 'Men' },
  { id: 7, name: 'X Xiota', image: shoe7, newPrice: 90, category: 'Men' },
  { id: 8, name: 'BRAHMCHARI', image: shoe8, newPrice: 95, category: 'Men' },
  { id: 9, name: 'Arivo', image: shoe9, newPrice: 100, category: 'Men' },
  { id: 10, name: 'ADIDAS', image: shoe10, newPrice: 105, category: 'Men' },
  { id: 11, name: 'Bonsar', image: shoe11, newPrice: 60, category: 'Men' },
  { id: 12, name: 'Abros', image: shoe12, newPrice: 65, category: 'Men' },
  { id: 13, name: 'Abros', image: shoe13, newPrice: 70, category: 'Men' },
  { id: 14, name: 'KILLER', image: shoe14, newPrice: 75, category: 'Men' },
  { id: 15, name: 'bacca bucci', image: shoe15, newPrice: 80, category: 'Men' },
  { id: 16, name: 'HRX by Hrithik Roshan', image: shoe16, newPrice: 85, category: 'Women' },
  { id: 17, name: 'HRX', image: shoe17, newPrice: 90, category: 'Women' },
  { id: 18, name: 'REDTAPE', image: shoe18, newPrice: 95, category: 'Women' },
  { id: 19, name: 'RapidBox', image: shoe19, newPrice: 100, category: 'Women' },
  { id: 20, name: 'Rowlans', image: shoe20, newPrice: 105, category: 'Women' },
  { id: 21, name: 'Rowlans1', image: shoe21, newPrice: 60, category: 'Women' },
  { id: 22, name: 'X Xiota', image: shoe22, newPrice: 65, category: 'Women' },
  { id: 23, name: 'AROOM', image: shoe23, newPrice: 70, category: 'Women' },
  { id: 24, name: 'REDTAPE', image: shoe24, newPrice: 75, category: 'Women' },
  { id: 25, name: 'Vokline', image: shoe25, newPrice: 80, category: 'Women' },
  { id: 26, name: 'VENDOZ', image: shoe26, newPrice: 85, category: 'Women' },
  { id: 27, name: 'CAMPUS', image: shoe27, newPrice: 90, category: 'Women' },
  { id: 28, name: 'REDTAPE', image: shoe28, newPrice: 95, category: 'Women' },
  { id: 29, name: 'Deals4you', image: shoe29, newPrice: 100, category: 'Women' },
  { id: 30, name: 'Crazyly', image: shoe30, newPrice: 105, category: 'Kids' },
  { id: 31, name: 'HOOH ', image: shoe31, newPrice: 60, category: 'Kids' },
  { id: 32, name: 'BERSACHE', image: shoe32, newPrice: 65, category: 'Kids' },
  { id: 33, name: 'AEROKICK', image: shoe33, newPrice: 70, category: 'Kids' },
  { id: 34, name: 'Now ', image: shoe34, newPrice: 75, category: 'Kids' },
  { id: 35, name: 'kats', image: shoe35, newPrice: 80, category: 'Kids' },
  { id: 36, name: 'Toothless', image: shoe36, newPrice: 85, category: 'Kids' },
  { id: 37, name: 'Toothless', image: shoe37, newPrice: 90, category: 'Kids' },
  { id: 38, name: 'Trendmode', image: shoe38, newPrice: 95, category: 'Kids' },
  { id: 39, name: 'KOBO', image: shoe39, newPrice: 100, category: 'Kids' },
  { id: 40, name: 'HOOH ', image: shoe40, newPrice: 105, category: 'Kids' },
 
];

export default productData;
