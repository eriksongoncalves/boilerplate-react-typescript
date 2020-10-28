import React from 'react';
import { render } from '@testing-library/react';

import Main from '..';

describe('Main Component', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<Main />);

    expect(getByRole('heading', { name: /Hello World/i }));
  });
});
