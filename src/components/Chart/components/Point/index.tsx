import React, {useState} from 'react';
import {useApp} from '../../../../providers';
import {Container, Label, RedSquare} from './styles';

interface CompanyProps {
  company: any;
}

const Point: React.FC<CompanyProps> = ({company}) => {
  const {updateCompany} = useApp();
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const parent = (
      e.target as HTMLDivElement
    ).parentElement!.getBoundingClientRect();
    if (e.clientY !== 0 && e.clientX !== 0) {
      updateCompany({
        ...company,
        ability: -((e.clientY - parent.y - 404) / 4).toFixed(2),
        vision: +((e.clientX - parent.x) / 4).toFixed(2),
      });
    }
  };

  return (
    <>
      <Container
        style={{
          bottom: `${company.ability}%`,
          left: `${company.vision}%`,
        }}
        draggable
        onDrag={handleDrag}
        onDragOver={e => e.preventDefault()}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <Label>{company.label}</Label>
      </Container>
      <RedSquare
        style={{
          visibility: `${isDragging ? 'visible' : 'hidden'}`,
          top: `${100 - company.ability}%`,
          right: `${100 - company.vision}%`,
        }}
      />
    </>
  );
};

export default Point;
