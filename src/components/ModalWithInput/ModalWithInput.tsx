import React, { useState } from 'react';
import { Modal } from '../index';

export const ModalWithInput = (): React.ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const [value, setValue] = useState<number | string>('');
  const changeVisible = () => {
    setVisible(() => !visible);
  };
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };
  return (
    <div>
      <input value={value} onChange={changeValue} />
      <button onClick={changeVisible}>Открыть модальное окно</button>
      <Modal isVisible={visible}>
        <p>{value}</p>
      </Modal>
    </div>
  );
};
