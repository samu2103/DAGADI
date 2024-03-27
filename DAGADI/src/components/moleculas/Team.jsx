import ULISES from "../../assets/img/Ulises.jpeg";
import CECI from "../../assets/img/CECI.jpeg";
import Jorge from "../../assets/img/Jorge.jpeg";
import ELI from "../../assets/img/ELI.jpeg";
import '../../assets/styles/team.css'; // Asegúrate de tener un archivo CSS para estos estilos

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Ulises',
      role: 'Cargo1',
      imageUrl: ULISES,
      socialMedia: {
        twitter: 'twitter1',
        instagram: 'instagram1',
      },
    },
    {
      id: 2,
      name: 'Ceci',
      role: 'Cargo2',
      imageUrl: CECI,
      socialMedia: {
        twitter: 'twitter2',
        instagram: 'instagram2',
      },
    },
    {
      id: 3,
      name: 'Eli',
      role: 'Cargo3',
      imageUrl: ELI,
      socialMedia: {
        twitter: 'twitter3',
        instagram: 'instagram3',
      },
    },
    {
      id: 4,
      name: 'Jorge',
      role: 'Cargo3',
      imageUrl: Jorge,
      socialMedia: {
        twitter: 'twitter3',
        instagram: 'instagram3',
      },
    },
  ];

  return (
    <div className="team-container">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-member">
          <img src={member.imageUrl} alt={member.name} className="circle-image" />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <div className="social-icons">
            <a href={`https://twitter.com/${member.socialMedia.twitter}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={`https://www.instagram.com/${member.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            {/* Agrega más iconos según sea necesario */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
