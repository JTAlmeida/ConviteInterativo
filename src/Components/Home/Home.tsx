import { Container } from "./Home.style";
import Swal from "sweetalert2";
import convite from "../../assets/convite.jpeg";
import confirmar from "../../assets/confirmar.png";
import cerimonia from "../../assets/cerimonia.png";
import presentes from "../../assets/presentes.png";
import recepcao from "../../assets/recepcao.png";

export default function Home() {
  return (
    <>
      <Container>
        <img src={convite} alt="convite" />
        <div>
          <a
            onClick={() => {
              Swal.fire({
                title: "<strong>Confirmação de Presença</strong>",
                icon: "info",
                html:
                  "Entendemos que todos tem compromisso e imprevistos, por isso pedimos que você seja muito sincero(a) na hora de confirmar sua presença, contamos com você(s) e se Deus quiser, nos veremos lá! <br/> <br/> <strong>Confirme com: <br/> Nome <br/> Irá ao Casamento? <br/> Quantas Pessoas? <br/> </strong> <br/>" +
                  "<strong>Obs: Convidado não convida, agradeço a compreensão.</strong> <br/>" +
                  '<br/><a href="https://wa.link/awy8li" target="_blank">Mande sua mensagem no whats!</a> ',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
                confirmButtonAriaLabel: "Thumbs up, great!",
              }).then((result) => {
                if (result.isConfirmed) {
                  window.open("https://wa.link/awy8li", "_blank");
                }
              });
            }}
            target="_blank"
          >
            <img src={confirmar} alt="confirmar" className="confirmar" />
          </a>
          <a href="https://goo.gl/maps/VHLNDQ42Wbad1Smt9" target="_blank">
            <img src={cerimonia} alt="cerimonia" className="cerimonia" />
          </a>
          <a href="https://i.ibb.co/qnmjwyt/image.png" target="_blank">
            <img src={presentes} alt="presentes" className="presentes" />
          </a>
          <a
            href="https://www.google.com/maps/place/15%C2%B049'36.8%22S+48%C2%B010'24.0%22W/@-15.8268245,-48.1733817,20.75z/data=!4m4!3m3!8m2!3d-15.8268871!4d-48.1733322?hl=pt-BR"
            target="_blank"
          >
            <img src={recepcao} alt="recepcao" className="recepcao" />
          </a>
        </div>
      </Container>
    </>
  );
}
