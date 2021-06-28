const getUserAdapter = (userFromServer) => {
  const {
    id,
    email,
    name,
    token,
  } = userFromServer;

  return {
    id,
    email,
    name,
    token,
    isPro: userFromServer['is_pro'],
    avatarUrl: userFromServer['avatar_url'],
  };
};

export default getUserAdapter;
