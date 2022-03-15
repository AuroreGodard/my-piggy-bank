import { Link } from 'react-router-dom';
import mpbFull from 'src/assets/images/mpb-logo-full.svg';

function Footer() {
  return (
    <>
      {/* FOOTER container */}
      <section className="bg-[#C9DECE] flex justify-center py-8 items-start">
        <div className="w-full flex justify-between
    xl:w-[1100px]
    "
        >
          <div className="w-1/3 flex flex-col gap-8">
            <h3 className="w-fit underline-footer-nav-title uppercase text-[1.5em]
      "
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                {' '}
                <a href="#concept">Le concept</a>
              </li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="w-1/3  flex justify-center">
            <Link to="/"><img className="h-36" src={mpbFull} alt="" /></Link>
          </div>

          <div className="w-1/3 flex flex-col justify-start items-end gap-8">
            <h3 className="w-fit h-fit underline-footer-nav-title uppercase text-[1.5em] text-right
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
