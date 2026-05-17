import { useState } from "react";
import { useTranslation } from "react-i18next";

function Post() {
  const [isVisible, toggleVisibility] = useState<boolean>(false);

  const { t } = useTranslation();

  // postData is temporary for UI development; Replace with real API-calls later.
  const postData = {
    user: "Jalmar2021",
    date: "2026-02-25",
    message: `Jag älskar mina ägare, men inte lika mycket som min mat.
    Jag älskar också godis, ben, mina gosedjur och ostbågar!
    dsafdfhadhfidsahudhfhihsiahfdiuhafidshfiduhs huhdsaifuhs isdhfhusd
    dfhiasfds hjdsfiudhsfihd idshfudhfasi oisdhfudhsia dishfiushaifhd
    fdsuihafisduhaf idhsfiuhisdhf ihdsfiuhisdahf ihdsfihdsifuh iushfd
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid
    fhuisdhfihdsifua iushfihsdif sdhfiusdhfi iudshfiusdhfih idsuhfuid`,
  };

  return (
    <article className="post">
      <div className="post__info">
        <p>{postData.user}</p>
        <span> __ </span>
        <p>{postData.date}</p>
      </div>
      <div className={`post__content ${isVisible ? "" : "hidden"}`}>
        <p className={`post__content-text ${isVisible ? "" : "hidden"}`}>
          {postData.message}
        </p>
        <div>
          <span></span>
          <button
            className="green-button"
            onClick={() =>
              isVisible ? toggleVisibility(false) : toggleVisibility(true)
            }
          >
            {isVisible ? t("blog.post.readLess") : t("blog.post.readMore")}
          </button>
        </div>
      </div>
    </article>
  );
}

export default Post;
