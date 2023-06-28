import BannerContainer from './Banner.styles';
3;
import img from '../../../../public/assets/images/asset-header.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <div className='content'>
          <div className='balloon'>
            <h4>webnars exclusivos</h4>
          </div>
          <h3>Menos conversinha,</h3>
          <div className='big-title'>
            <h2>Mais Conversão</h2>
            <Image src={img} alt='img_leadster' width={49} height={32} />
          </div>
          <p>
            Conheça as estratégias de como <strong>mudar o jogo</strong> e como
            aplicá-las no seu negócio
          </p>
        </div>
      </BannerContainer>
    </>
  );
};

export default Banner;
