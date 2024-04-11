import testIneligiblePage from '../../../../../utils/testIneligiblePage.ts';

describe('Felony Class B Ineligible Page', () => {
  it('should display ineligibility content due to RCW 9.94A.640(2)(g)', () => {
    testIneligiblePage('f-circ-classb-1-ineligible', '9.94A.640(2)(g)', 'https://app.leg.wa.gov/RCW/default.aspx?cite=9.94a.640');
  });
});
