import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AchievementDetails = () => {
  const { id } = useParams(); 
  const [achievement, setAchievement] = useState(null);

  
  useEffect(() => {
    fetch('/achievements.json') 
      .then((response) => response.json())
      .then((data) => {
        const selectedAchievement = data.find((item) => item.id === parseInt(id));
        setAchievement(selectedAchievement);
      });
  }, [id]);

  if (!achievement) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{achievement.title}</h1>
      <p>{achievement.details}</p>
    </div>
  );
};

export default AchievementDetails;
