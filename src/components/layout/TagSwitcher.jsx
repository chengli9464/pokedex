import React, { useRef, useState } from 'react';
import { Tabs } from 'antd';
import List from '@/components/pokemon/List.jsx';
import PokemonDetails from '@/components/pokemon/PokemonDetails';

const TagsSwitcher = () => {
  const defaultPanes = new Array(1).fill(null).map((_, index) => {
    const id = String(index + 1);
    return {
      label: `index`,
      children: <PokemonDetails></PokemonDetails>,
      key: id,
    };
  });

  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items, setItems] = useState(defaultPanes);
  const newTabIndex = useRef(0);
  const onChange = (key) => {
    setActiveKey(key);
  };
  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    setItems([
      ...items,
      {
        label: 'New Tab',
        children: 'New Tab Pane',
        key: newActiveKey,
      },
    ]);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    const targetIndex = items.findIndex((pane) => pane.key === targetKey);
    const newPanes = items.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && targetKey === activeKey) {
      const { key } =
        newPanes[
          targetIndex === newPanes.length ? targetIndex - 1 : targetIndex
        ];
      setActiveKey(key);
    }
    setItems(newPanes);
  };
  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };
  return (
    <>
      <Tabs
        hideAdd
        onChange={onChange}
        activeKey={activeKey}
        type='editable-card'
        onEdit={onEdit}
        items={items}
      />
    </>
  );
};
export default TagsSwitcher;
