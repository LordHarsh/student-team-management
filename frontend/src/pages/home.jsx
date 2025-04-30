import { Link } from 'react-router-dom';
import { FaUserPlus, FaUsers, FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Team Maestro</h1>
          <p>
            Streamline your team management with our intuitive platform. Add, view, 
            and manage your team members all in one place.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/add-member" className="button" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaUserPlus /> Add New Member
            </Link>
            <Link to="/members" className="button outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaUsers /> View Team
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What You Can Do</h2>
          <div className="grid grid-3">
            {/* Feature 1 */}
            <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'var(--primary-color)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <FaUserPlus size={32} color="white" />
              </div>
              <h3 style={{ marginBottom: '15px' }}>Add Team Members</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray-color)' }}>
                Easily add new team members with detailed information including profile pictures.
              </p>
              <Link to="/add-member" className="button outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                Add Member <FaArrowRight />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'var(--secondary-color)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <FaUsers size={32} color="white" />
              </div>
              <h3 style={{ marginBottom: '15px' }}>View All Members</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray-color)' }}>
                Get a comprehensive view of your entire team in a clean, organized layout.
              </p>
              <Link to="/members" className="button outline" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px',
                borderColor: 'var(--secondary-color)',
                color: 'var(--secondary-color)'
              }}>
                View Team <FaArrowRight />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="card" style={{ padding: '30px', textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: 'var(--accent-color)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </div>
              <h3 style={{ marginBottom: '15px' }}>Detailed Profiles</h3>
              <p style={{ marginBottom: '20px', color: 'var(--gray-color)' }}>
                Access comprehensive member details with just one click.
              </p>
              <button className="button outline" style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '5px',
                borderColor: 'var(--accent-color)',
                color: 'var(--accent-color)'
              }}>
                Learn More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>About Team Maestro</h2>
              <p style={{ marginBottom: '20px' }}>
                Team Maestro is a powerful yet simple team management application designed to help
                you keep track of your team members in an organized and efficient way.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Whether you're managing a small project group or a large department, our application
                provides all the tools you need to manage your team effectively.
              </p>
              <Link to="/members" className="button" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                Explore Now <FaArrowRight />
              </Link>
            </div>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: 'var(--border-radius)', 
              padding: '40px',
              boxShadow: 'var(--box-shadow)'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexDirection: 'column'
              }}>
                <div style={{ 
                  fontSize: '5rem', 
                  color: 'var(--primary-color)', 
                  marginBottom: '20px',
                  display: 'flex'
                }}>
                  <FaUsers />
                </div>
                <h3 style={{ marginBottom: '10px', textAlign: 'center' }}>Team Maestro</h3>
                <p style={{ color: 'var(--gray-color)', textAlign: 'center' }}>
                  Simplifying team management for everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;