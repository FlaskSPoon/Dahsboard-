"use client";
import { useState } from "react";
import Banner from "components/admin/nft-marketplace/Banner";
import TestimonialCard from "components/card/TestimonialCard";
import NFt2 from '/public/img/nfts/Nft2.png';
import NFt4 from '/public/img/nfts/Nft4.png';
import NFt3 from '/public/img/nfts/Nft3.png';
import avatar1 from '/public/img/avatars/avatar1.png';
import avatar2 from '/public/img/avatars/avatar2.png';
import image1 from '/public/img/profile/image1.png';
import Card from 'components/card';
import Image from 'next/image';

export default function AdminTestimonials() {
  // Données statiques des témoignages
  const [testimonials, setTestimonials] = useState([
    {
      id: "1",
      avatar: avatar1,
      author: "Alice Dupont",
      title: "Service exceptionnel !",
      content: "J'ai adoré l'expérience, merci beaucoup !",
      category: "Qualité",
      image: image1,
      published: true,
      rating: 5
    },
    {
      id: "2",
      avatar: avatar2,
      author: "Jean Martin",
      title: "Très satisfait",
      content: "Superbe prestation, je recommande !",
      category: "Satisfaction",
      image: NFt2,
      published: false,
      rating: 4
    },
    {
      id: "3",
      avatar: avatar1,
      author: "Sophie Laurent",
      title: "Expérience moyenne",
      content: "Quelques points à améliorer, mais correct dans l’ensemble.",
      category: "Amélioration",
      image:NFt3,
      published: true,
      rating: 3,

    },
    {
      id: "4",
      avatar: avatar2,
      author: "Pierre Dupont",
      title: "Très satisfait",
      content: "Superbe prestation, je recommande !",
      category: "Satisfaction",
      image: NFt4,
      published: true,
      rating: 4
    },
  ]);

const handleDelete = (id: string) => {
    console.log(`Deleting testimonial with id: ${id}`);
    // Suppression du témoignage
  };

  const handleTogglePublish = (id: string, published: boolean) => {
    console.log(`Toggling publish status for testimonial with id: ${id}`);
    // Logique pour publier/dépublier
  };

  const handleEdit = (id: string) => {
    console.log(`Editing testimonial with id: ${id}`);
    // Logique pour éditer
  };

  const handlePrevious = () => {
    console.log('Show previous testimonial');
    // Logique pour afficher le témoignage précédent
  };

  const handleNext = () => {
    console.log('Show next testimonial');
    // Logique pour afficher le témoignage suivant
  };

  // Publier/Dépublier un témoignage
  const togglePublish = (id: string) => {
    setTestimonials((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, published: !t.published } : t
      )
    );
  };

  // Supprimer un témoignage
  const deleteTestimonial = (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce témoignage ?")) return;
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="p-6">
      {/* Bannière */}
      <Banner
        title="Centre de gestion des témoignages"
        content="Ajoutez, modifiez, supprimez et gérez les témoignages des utilisateurs."
        buttonOne={{
          title: "Ajouter un témoignage",
          link: "/testimonials/create",
        }}
        buttonTwo={{
          title: "Gérer les catégories",
          link: "/testimonials/categories",
        }}
      />

      {/* Liste des témoignages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {testimonials.length > 0 ? (
          testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              id={t.id}
              title={t.title}
              content={t.content}
              author={t.author}
              category={t.category}
              image={t.image}
              avatar={t.avatar}
              published={t.published}
              onTogglePublish={togglePublish}
              onDelete={deleteTestimonial}
              onEdit={(id) => console.log("Modifier témoignage", id)}
            rating={t.rating}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          ))
        ) : (
          <p className="text-gray-500">Aucun témoignage disponible.</p>
        )}
      </div>
    </div>
  );
}

