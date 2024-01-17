import React from 'react';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { MapContainer, TextAdd, TextAddContainer } from './EventMapStyles';

export function EventMap({ event }) {
  const latitude = Number(event?.eventLocation?.eventPlatform?.latitude || event?.eventLocation?.eventGeolocation?.latitude);
  const longitude = Number(event?.eventLocation?.eventPlatform?.logitude || event?.eventLocation?.eventGeolocation?.longitude);

  const zoom = event?.eventLocation?.eventPlatform ? 15 : 9;

  return (
    <YMaps>
      <MapContainer>
        <Map
          width="100%"
          defaultState={{
            center: [latitude, longitude],
            zoom,
          }}
        >
          <Placemark
            geometry={[latitude, longitude]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: '/img/logo.svg',
            }}
          />
        </Map>
        <TextAddContainer>
          <TextAdd>{event?.eventLocation?.eventGeolocation?.city}</TextAdd>
        </TextAddContainer>
      </MapContainer>
    </YMaps>
  );
}
