import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App'; // Adjust the import path if necessary

beforeEach(() => {
  // Mock DOM elements that your NavBar interacts with
  document.body.innerHTML = `
    <div id="hamburger-button"></div>
    <div class="mobile-navbar-tabs-li"></div>
    <div class="mobile-navbar-tabs-li"></div>
    <div class="mobile-navbar-tabs-li"></div>
  `;
});

test('renders the main components', () => {
  const { getByText } = render(<App />);

  // Check if NavBar is rendered
  expect(getByText(/Hey!/i)).toBeInTheDocument();
  // Check if HomePage is rendered
  expect(getByText(/Let's Talk!/i)).toBeInTheDocument();
  // Check if AboutPage is rendered
  expect(getByText(/Hi!/i)).toBeInTheDocument();
  // Check if SkillsPage is rendered
  expect(getByText(/Tech Stack/i)).toBeInTheDocument();
  // Check if PortfolioPage is rendered
  expect(getByText(/NASA API Portal/i)).toBeInTheDocument();
  // Check if Footer is rendered
  expect(getByText(/GetinTouch/i)).toBeInTheDocument();
});
