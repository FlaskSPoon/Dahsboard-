import SendNewsletter from "./sendNewletter/page";
import NewsletterStats from "./newletterStatus/page";
import NewsletterHistory from "./newletterHistory/page";
import Banner from 'components/admin/nft-marketplace/Banner';
const AdminNewsletterPage = () => {
  return (
    <div className="p-6">
       <Banner
                title="Centre de gestion des newsletters"
                content="Ajouter, modifier, supprimer et gérer l'état des newsletters à publier"
                buttonOne={{
                  title: 'Ajouter un newsletter',
                  link: 'newsletter/create',
                }}
              buttonTwo={{
                title: 'Ajouter une catégorie de newsletters',
                link: 'newsletter/category/',
              }}
              />
      <SendNewsletter />
< NewsletterStats />
<NewsletterHistory />
    </div>
  );
};

export default AdminNewsletterPage;
