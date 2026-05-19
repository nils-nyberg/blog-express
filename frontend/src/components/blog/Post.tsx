import PostContent from "./PostContent";

function Post() {
  // postData is temporary for UI development; Replace with real API-calls later.
  const postData = {
    user: "Jalmar2021",
    date: "2026-02-25",
    message: `Jag älskar mina ägare, men inte lika mycket som min mat.
    Jag älskar också godis, ben, mina gosedjur och ostbågar!
    dsafdfhadhfidsahudhfhihsiahfdiuhafidshfiduhs huhdsaifuhs isdhfhusd
    dfhiasfds hjdsfiudhsfihd idshfudhfasi oisdhfudhsia dishfiushaifhd
    jdsadjsiadjosajidaoidsj sajd`,
  };

  return (
    <article className="post">
      <div className="post__info">
        <p>{postData.user}</p>
        <span> __ </span>
        <p>{postData.date}</p>
      </div>
      <PostContent maxChars={300} content={postData.message} />
    </article>
  );
}

export default Post;
