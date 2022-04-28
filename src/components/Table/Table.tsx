import React from 'react';
import {Container, Th} from './styles';
import {Button} from '../../components';
import {useApp} from '../../providers';
import {Item} from '.';

const Table: React.FC = () => {
  const {companyList, addCompany} = useApp();

  const onPressAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addCompany({
      id: Date.now(),
      label: (companyList.length + 1).toString(),
      vision: 50,
      ability: 50,
    });
  };

  return (
    <Container>
      <Button onClick={onPressAdd}>Add</Button>
      <table>
        <thead>
          <tr>
            <Th width="16rem">Label</Th>
            <Th>Vision</Th>
            <Th>Ability</Th>
            <Th>Delete</Th>
          </tr>
        </thead>
        <tbody>
          {companyList.map(company => (
            <Item key={company.id} company={company} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
