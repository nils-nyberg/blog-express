import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  content: string;
  maxChars: number;
};

function PostContent({ content, maxChars }: Props) {
  const [isVisible, toggleVisibility] = useState<boolean>(false);

  const { t } = useTranslation();

  return content.length <= maxChars ? (
    <>
      <div className="post__content">
        <p className="post__content-text">{content}</p>
      </div>
    </>
  ) : (
    <>
      <div className={`post__content ${isVisible ? "" : "hidden"}`}>
        <p className={`post__content-text ${isVisible ? "" : "hidden"}`}>
          {content}
        </p>
        <div>
          <span></span>
          <button
            className="green-button"
            onClick={() => toggleVisibility(!isVisible)}
          >
            {isVisible ? t("blog.post.readLess") : t("blog.post.readMore")}
          </button>
        </div>
      </div>
    </>
  );
}

export default PostContent;
