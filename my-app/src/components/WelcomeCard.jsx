import './Styles.css'

function WelcomeCard({ name }) {
  return (
    <div className='design' >
      <h2>Welcome, {name}!</h2>
      <p>We’re glad that you are on this website.</p>
    </div>
  );
}

export default WelcomeCard;
