import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((planet) => (
          <div key={ planet.name }>
            <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
          </div>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
