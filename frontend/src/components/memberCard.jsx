import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEye } from 'react-icons/fa';
import { memberService } from '../services/api';

const MemberCard = ({ member }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (member.hasImage) {
          const imageData = await memberService.getMemberImage(member._id);
          setProfileImage(imageData);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile image:', error);
        setLoading(false);
      }
    };

    fetchImage();
  }, [member]);

  return (
    <div className="card" style={{ padding: 0, height: '100%' }}>
      <div style={{ position: 'relative', paddingBottom: '75%', overflow: 'hidden' }}>
        {loading ? (
          <div className="image-placeholder" style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <FaUser size={40} />
          </div>
        ) : profileImage ? (
          <img 
            src={profileImage} 
            alt={`${member.name}'s profile`} 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div className="image-placeholder" style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e9ecef'
          }}>
            <FaUser size={40} />
          </div>
        )}
      </div>

      <div style={{ padding: '20px' }}>
        <h3 style={{ marginBottom: '8px', color: 'var(--primary-color)' }}>{member.name}</h3>
        <p style={{ 
          color: 'var(--gray-color)', 
          fontSize: '1rem',
          marginBottom: '15px'
        }}>
          {member.role}
        </p>
        
        <Link 
          to={`/members/${member._id}`} 
          className="button"
          style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px' 
          }}
        >
          <FaEye /> View Details
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;