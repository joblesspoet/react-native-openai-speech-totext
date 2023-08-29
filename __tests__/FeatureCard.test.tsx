import 'react-native';
import React from 'react';

// Note: import explicitly to use the types shiped with jest.
import {it, describe, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import {FeatureCard} from '../src/components';
describe('FeatureCard', () => {
  it('renders correctly with provided props', () => {
    const cardColor = 'bg-blue-300';
    const cardImage = require('../path/to/your/card-image.png'); // Replace with actual image path
    const cardTitle = 'Sample Title';
    const cardDescription = 'Sample description for testing';

    const {getByText, getByTestId} = render(
      <FeatureCard
        cardColor={cardColor}
        cardImage={cardImage}
        cardTitle={cardTitle}
        cardDescription={cardDescription}
      />,
    );

    const cardElement = getByTestId('feature-card');
    expect(cardElement).toBeTruthy(); // Check if the card element exists

    const titleElement = getByText(cardTitle);
    expect(titleElement).toBeTruthy(); // Check if the title text exists

    const descriptionElement = getByText(cardDescription);
    expect(descriptionElement).toBeTruthy(); // Check if the description text exists
  });
});
