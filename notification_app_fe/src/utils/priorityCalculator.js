const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculatePriority = (notification) => {
  return weights[notification.Type] || 0;
};