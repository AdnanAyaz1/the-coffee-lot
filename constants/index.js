import images from './images';
import data from './data';

export { images, data };

export const scrollToSection = (id) => {
  const element = document.getElementById(id.replace('#', ''));
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
