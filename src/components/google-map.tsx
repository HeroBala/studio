"use client";

import React from 'react';

interface GoogleMapProps {
  placeId: string;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({placeId}) => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:${placeId}`}
      width="100%"
      height="450"
      style={{border: 0}}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  );
};

export default GoogleMapComponent;
