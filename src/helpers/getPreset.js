export const getPresetList = () => JSON.parse(localStorage.getItem("preset")) || [
    {
      id: 1,
      title: 'Preset 1',
      conjunto: []
    },
    {
      id: 2,
      title: 'Preset 2',
      conjunto: [
      ]
    },
    {
      id: 3,
      title: 'Preset 3',
      conjunto: [
      ]
    },
    {
      id: 4,
      title: 'Preset 4',
      conjunto: [
      ]
    },
    {
      id: 5,
      title: 'Preset 5',
      conjunto: [
      ]
    },
    {
      id: 6,
      title: 'Preset 6',
      conjunto: [
      ]
    },
  ];
