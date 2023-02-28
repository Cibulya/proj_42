import { BgParticles } from 'components/secretBg/secretBg';
import '../../../styles/activatePage.scss';
// Перевод
//Staronka aktyvacyi akaŭnta
//Dziakuj za aktyvacyju
//Vy možacie zakryć hetuju ŭkładku...
const ActivatePage = () => {
  return (
    <div className="activate__page">
      <BgParticles />
      <h1 className="activate__title">This is a User activation page!</h1>
      <p className="activate__text">Thank you for account activation!</p>
      <p className="activate__description">You can close this tab...</p>
    </div>
  );
};

export default ActivatePage;
