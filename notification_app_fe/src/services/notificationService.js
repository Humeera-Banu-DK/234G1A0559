export const fetchNotifications = async () => {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications"
    );

    return await response.json();
  } catch (error) {
    throw error;
  }
};