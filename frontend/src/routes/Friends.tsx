import { useTranslation } from "react-i18next";

function Friends() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="under-construction">{t("friends.underConstruction")}</h1>
    </>
  );
}

export default Friends;
