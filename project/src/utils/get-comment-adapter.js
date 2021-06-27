const getCommentAdapter = (commentFromServer) => {
  const {
    id,
    date,
    rating,
    comment,
    user,
  } = commentFromServer;

  return {
    id,
    date,
    rating,
    description: comment,
    author: {
      id: user.id,
      name: user.name,
      isPro: user['is_pro'],
      avatarUrl: user['avatar_url'],
    }
  };
};

export default getCommentAdapter;
