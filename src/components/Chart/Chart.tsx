import React from 'react';
import {useApp} from '../../providers';
import {Container, AxisLabel, InnerAxis, AreaLabel} from './styles';
import {Point} from '.';

const Chart: React.FC = () => {
  const {companyList} = useApp();
  return (
    <Container>
      <AxisLabel axis="x">Completeness of vision &#8594;</AxisLabel>
      <AxisLabel axis="y">Ability to execute &#8594;</AxisLabel>
      <InnerAxis orientation="h" />
      <InnerAxis orientation="v" />
      <AreaLabel area="top-left">Challengers</AreaLabel>
      <AreaLabel area="top-right">Leaders</AreaLabel>
      <AreaLabel area="bottom-left">Niche Players</AreaLabel>
      <AreaLabel area="bottom-right">Visionaries</AreaLabel>
      {companyList.map(company => (
        <Point key={company.id} company={company} />
      ))}
    </Container>
  );
};

export default Chart;
