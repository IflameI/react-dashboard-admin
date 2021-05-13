import { useState } from 'react';

const useHeaderFunc = (initial) => {
  const [visibleTickets, setVisibleTickets] = useState(initial);
  const [visibleMessages, setVisibleMessages] = useState(initial);
  const [visibleSettings, setVisibleSettings] = useState(initial);
  const [visibleInfo, setVisibleInfo] = useState(initial);

  const toggleVisibleTickets = () => {
    setVisibleTickets(!visibleTickets);
    setVisibleMessages(false);
    setVisibleSettings(false);
    setVisibleInfo(false);
  };

  const toggleVisibleMessages = () => {
    setVisibleMessages(!visibleMessages);
    setVisibleTickets(false);
    setVisibleSettings(false);
    setVisibleInfo(false);
  };

  const toggleVisibleSettings = () => {
    setVisibleSettings(!visibleSettings);
    setVisibleTickets(false);
    setVisibleMessages(false);
    setVisibleInfo(false);
  };

  const toggleVisibleInfo = () => {
    setVisibleInfo(!visibleInfo);
    setVisibleTickets(false);
    setVisibleMessages(false);
    setVisibleSettings(false);
  };

  return {
    visibleInfo,
    visibleSettings,
    visibleMessages,
    visibleTickets,
    setVisibleTickets,
    setVisibleMessages,
    setVisibleInfo,
    toggleVisibleTickets,
    toggleVisibleMessages,
    toggleVisibleSettings,
    toggleVisibleInfo,
  };
};

export default useHeaderFunc;
