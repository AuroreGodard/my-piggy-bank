// Import
import HeaderMenu from 'src/components/HeaderMenu';
import './style.scss';

// Component
function Faq() {
  const dataFaq = [
    {
      title: 'Comment créer un compte My Piggy Bank ?',
      content: `Vous souhaitez créer une cagnotte ?
  Pour ce faire, vous devrez créer un compte my piggy bank. Vous pouvez d'ores et déjà créer un compte en cliquant ici.
  Il vous suffira de remplir l'ensemble des champs avec les informations demandées et de créer un mot de passe. Ce dernier doit contenir au minimum 8 caractères, dont une majuscule, une minuscule, un chiffre.`,
    },

    {
      title: 'Comment me connecter à mon compte My Piggy Bank ?',
      content: 'Vous pouvez accéder à votre compte My Piggy Bank depuis n\'importe quelle page de notre site en cliquant sur le menu en haut à droite puis "Se connecter".',
    },

    {
      title: 'Je souhaite supprimer mon compte client et/ou effacer mes données personnelles.',
      content: `Sachez qu'il n'est pas possible de le faire directement depuis les paramètres de votre profil. Il suffit de nous adresser votre demande ici. 
  Une fois votre demande traitée, votre compte client my piggy bank sera fermé.`,
    },

    {
      title: 'Personnaliser ma cagnotte :',
      content: 'Connectez-vous à votre compte et rendez-vous sur la page de votre cagnotte. Cliquez sur " Personnaliser " sur la cagnotte selectionnée.',
    },

    {
      title: "Je dépose de l'argent :",
      content: 'blabla',
    },

  ];

  return (
    <div className="container mx-auto p-4 ">
      <h3 className="w-fit underline-step-title uppercase text-[1.5em] mb-5">FAQ</h3>

      {dataFaq.map((faq) => (
        <div className="mb-7 shadow-md p-3 rounded-md" key={faq.title}>
          <h2 className="mb-3">{faq.title}</h2>
          <p>{faq.content}</p>
        </div>
      ))}

    </div>
  );
}

// Export
export default Faq;
