import { render } from '@testing-library/react';
import { Container } from '.';

describe('<Container />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Container>
        <span>Teste Front-end</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyle('max-width: 1076px');
    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  width: 100%;
  max-width: 1076px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

<div
  class="c0"
>
  <span>
    Teste Front-end
  </span>
</div>
`);
  });
});
