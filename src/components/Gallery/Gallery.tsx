import image1 from '@/assets/image-1.jpg';
import image2 from '@/assets/image-2.png';
import Image3 from '@/assets/wings.svg';

function Gallery() {
  return (
    <section>
      <img width={250} src={image1} />
      <img width={250} src={image2} />
      <Image3 width={250} height={250} style={{color: 'red'} } />
    </section>
  );
}

export default Gallery;