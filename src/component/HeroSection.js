const Logo =
  "https://media.istockphoto.com/id/1060663348/photo/film-strip-isolated-on-white-background-3d-rendered-illustration.jpg?s=612x612&w=0&k=20&c=5CGrJVawdyn_Nfba9rLHGakEzwD2b2nSU87mW2jWVKM=";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={Logo} alt="" />
      <div className="hero-content">
        <h1>WELCOME TO MY MOVIES APP!</h1>
      </div>
    </div>
  );
};

export default HeroSection;
