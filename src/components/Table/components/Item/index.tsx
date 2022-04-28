import React from 'react';
import {Input, TableCell} from './styles';
import {Button} from '../../../index';
import {ICompany} from '../../../../models/Company';
import {useApp} from '../../../../providers';

interface TableItemProps {
  company: ICompany;
}

const Item: React.FC<TableItemProps> = ({company}) => {
  const {updateCompany, removeCompany} = useApp();

  const onPressDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    e.preventDefault();
    removeCompany(id);
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCompany({...company, [e.target.name]: e.target.value});
  };

  return (
    <tr>
      <TableCell>
        <Input
          type="text"
          name="label"
          value={company.label}
          onChange={inputChange}
        />
      </TableCell>
      <TableCell>
        <Input
          type="number"
          name="vision"
          max="100"
          min="0"
          value={company.vision}
          onChange={inputChange}
        />
      </TableCell>
      <TableCell>
        <Input
          type="number"
          name="ability"
          max="100"
          min="0"
          value={company.ability}
          onChange={inputChange}
        />
      </TableCell>
      <TableCell hasButton>
        <Button
          fluid
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onPressDelete(e, company.id)
          }
        >
          Delete
        </Button>
      </TableCell>
    </tr>
  );
};

export default Item;
