import { Link } from 'react-router-dom';
import mpbFull from 'src/assets/images/mpb-logo-full.svg';

function Footer() {
  return (
    <>
      {/* FOOTER container */}
      <section className="bg-[#C9DECE] flex justify-center py-8 items-start">
        <div className="w-full flex flex-col items-center gap-16
        sm:justify-between sm:flex-row
        xl:w-[1100px]
    "
        >
          <div className="order-2 w-full flex flex-col gap-8 items-center
          sm:w-1/3 sm:order-1 sm:items-start sm:place-self-start sm:pl-10"
          >
            <h3 className="w-fit underline-footer-nav-title uppercase text-[1.5em]
      "
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 items-center
            "
            >
              <li>
                {' '}
                <a href="#concept">Le concept</a>
              </li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="order-1 w-full sm:w-1/3 flex justify-center items-center
          sm:order-2"
          >
            <Link to="/"><img className="h-36" src={mpbFull} alt="" /></Link>
          </div>

          <div className="order-3 w-full  flex flex-col justify-start items-center gap-8
          sm:w-1/3 sm:items-end sm:place-self-start sm:pr-10"
          >
            <h3 className=" w-fit h-fit underline-footer-nav-title uppercase text-[1.5em] text-right
      "
            >
              Nous contacter
            </h3>
            <p className="cursor-pointer">hello@mypiggybank.fr</p>
          </div>
        </div>
      </section>
      {/* END FOOTER container */}
    </>
  );
}

export default Footer;
