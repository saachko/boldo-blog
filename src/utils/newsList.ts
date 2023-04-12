import { NewsItem } from 'ts/interfaces';

import imageFirst from 'assets/images/image-1.png';
import imageSecond from 'assets/images/image-2.png';
import imageThird from 'assets/images/image-3.png';
import imageFourth from 'assets/images/image-4.png';
import imageFifth from 'assets/images/image-5.png';
import imageSixth from 'assets/images/image-6.png';

import chandlerImage from 'assets/images/chandler-bing-image.png';
import monicaImage from 'assets/images/monica-geller-image.png';
import rachelImage from 'assets/images/rachel-green-image.png';

const newsList: NewsItem[] = [
  {
    id: '1',
    date: 'November 22, 2021',
    text: 'Pitch termsheet backing validation focus release.',
    image: imageFirst,
    author: {
      name: 'Chandler Bing',
      image: chandlerImage,
    },
  },
  {
    id: '2',
    date: 'November 22, 2021',
    text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    image: imageSecond,
    author: {
      name: 'Rachel Green',
      image: rachelImage,
    },
  },
  {
    id: '3',
    date: 'November 22, 2021',
    text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    image: imageThird,
    author: {
      name: 'Monica Geller',
      image: monicaImage,
    },
  },
  {
    id: '4',
    date: 'November 22, 2021',
    text: 'Pitch termsheet backing validation focus release.',
    image: imageFourth,
    author: {
      name: 'Chandler Bing',
      image: chandlerImage,
    },
  },
  {
    id: '5',
    date: 'November 22, 2021',
    text: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
    image: imageFifth,
    author: {
      name: 'Rachel Green',
      image: rachelImage,
    },
  },
  {
    id: '6',
    date: 'November 22, 2021',
    text: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
    image: imageSixth,
    author: {
      name: 'Monica Geller',
      image: monicaImage,
    },
  },
];

export default newsList;
