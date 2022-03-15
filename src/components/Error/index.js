import Footer from 'src/components/Footer';
import HeaderMenu from 'src/components/HeaderMenu';
import { Link } from 'react-router-dom';

import './style.scss';

function Error() {
  const piggyColor = '#000000';

  return (
    <div className="h-[calc(100vh_-_250px)] w-full flex flex-col gap-8 justify-center items-center mb-16">
      <h1 className="w-fit pt-8 underline-404-title uppercase text-[4em]
          "
      >
        404
      </h1>
      <svg width="315" height="158" viewBox="0 0 315 158" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M131 98.5714C134.351 81.418 141.367 56.4162 163.04 55.1429C171.135 54.6673 178.224 46 185.925 46C195.842 46 205.759 46 215.676 46C232.124 46 248.943 50.3884 258.65 62.5079C263.277 68.2836 264.196 76.2878 268.822 82.0635C274.72 89.4268 270.602 97.6755 270.602 105.429C270.602 139.93 209.125 142 185.925 142C166.903 142 157.44 135.392 145.24 123.206C133.778 111.759 133.289 90.9719 133.289 73.4286" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M163 133C161.239 140.652 157.327 148.494 154 155" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M259.016 123C259.016 130.989 258.322 140.152 266 144" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M264 75.7535C267.309 74.3124 289.762 60.9736 289.068 73.3602C288.817 77.8356 277.195 80.5753 275.521 74.4239C273.405 66.6469 277.945 61.3934 284.51 61.3934C292.907 61.3934 298.305 58.8498 300.589 67.2438C302.788 75.3267 297.807 78.1623 296.031 69.7701C294.891 64.3834 304.924 58.4404 309.072 61.9252C315.467 67.2983 310.314 73.3602 303.881 73.3602C294.171 73.3602 306.245 61.213 307.299 59" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M140 66.8112C121.541 43.1383 102.26 28 71.1339 28C56.177 28 49.3872 33.2998 39.2326 43.4737C31.5082 51.2129 39.7416 73.0985 42.1443 81.5239C48.7677 104.75 87.8806 104.398 107.086 98.9001C115.803 96.4047 135.443 95.5374 135.443 83.9337C135.443 71.7478 124.049 63.722 124.049 53.1131" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M92.3783 50C86.5995 50 71.4997 50.3435 72.0128 59.4185C72.0534 60.137 84.3359 65.9414 86.5955 66.6132C97.9973 70.003 103.619 50 90.1154 50" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M59 44C64.3689 43.8121 68.9411 41 74 41" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M95 41H106" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M72 69C79.1782 71.5211 84.5324 73 92 73" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M49 27.75C41.3498 17.3616 33.7542 12 20.5212 12C10.5448 12 3.43398 16.2167 3.43398 26.625C3.43398 36.1801 -0.0175846 48 12.5472 48C15.3342 48 26.0526 46.2599 26.217 43.5C26.66 36.0625 27.9566 36.75 35.3302 36.75" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M91 27C97.0818 11.4195 95.5139 5.6128 113.386 4.62018C123.468 4.0602 128.115 -0.459061 136.269 8.59882C137.995 10.5162 140 18.5559 140 21.2807C140 23.514 128.648 22.524 126.817 22.524C117.04 22.524 111.717 11.8622 106.67 27" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M83 56C83.034 57.8597 83.4628 58.5674 84 60" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M88 56C88.8567 56.9408 90 57.8739 90 59" stroke={piggyColor} strokeWidth="6" strokeLinecap="round" />
      </svg>
      <h2 className="text-center">
        Il semble que voyez perdu,
        {' '}
        <br />
        comme notre graphiste...
      </h2>
      <Link to="/" className="bg-[#CFB6E5] w-fit text-slate-600 font-bold px-6 rounded-lg py-2 uppercase flex items-center gap-2" type="button">
        <span>Retourner à l'accueil</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </Link>
    </div>
  );
}

export default Error;

/*

 */
