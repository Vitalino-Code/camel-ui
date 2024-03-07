import { Footer, FooterContent, FooterLinks, FooterLink } from './styles'
import logo from '../../../assets/images/logo.png'
import { IoLocationOutline } from 'react-icons/io5'
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const FooterComponent = () => {
  return (
    <Footer>
      <FooterContent>
        <img src={logo} alt="Logo da Camel" />
        <p>
          ©2023 - CAMEL ELETRICIDADE.
          <br />
          <br />
          Todos os direitos reservados.
        </p>
        <FooterLinks>
          <FooterLink>
            <a
              href="https://www.google.com/maps/place/Camel+Eletricidade/@-8.2528998,-35.9733131,18z/data=!4m10!1m2!2m1!1sRodovia+PE-95,319+%7C+GALP%C3%83O+D+%7C+Luiz+Gonzaga%0D%0ACaruaru+-+P!3m6!1s0x7a98bcf8a832f91:0x8c8a11189ca74d7f!8m2!3d-8.252883!4d-35.972592!15sCjlSb2RvdmlhIFBFLTk1LDMxOSB8IEdBTFDDg08gRCB8IEx1aXogR29uemFnYQ0KQ2FydWFydSAtIFBaMyIxcm9kb3ZpYSBwZSA5NTMxOSBnYWxww6NvIGQgbHVpeiBnb256YWdhIGNhcnVhcnUgcJIBF2VsZWN0cmljYWxfc3VwcGx5X3N0b3JlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU54T0ZwaFFWVm5FQUXgAQA!16s%2Fg%2F1tjyttk1?hl=pt-BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLocationOutline style={{ height: '30px', width: '30px' }} />
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://www.instagram.com/cameleletricidade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ height: '30px', width: '30px' }} />
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://www.facebook.com/cameleletricidade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook style={{ height: '30px', width: '30px' }} />
            </a>
          </FooterLink>
          <FooterLink>
            <a
              href="https://api.whatsapp.com/send/?phone=5581991738533&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp style={{ height: '30px', width: '30px' }} />
            </a>
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </Footer>
  )
}

export default FooterComponent
