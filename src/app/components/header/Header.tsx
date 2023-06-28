import logo from '../../../../public/assets/images/logo.png';
import HeaderContainer from './Header.styles';
import Image from 'next/image';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Image src={logo} alt='logo' width={200} height={40} />
      </HeaderContainer>
    </>
  );
};

export default Header;
