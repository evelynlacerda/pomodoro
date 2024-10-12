import { useTranslation } from "react-i18next";

const Buttons = () => {
    const { t } = useTranslation()

    return (
        <div>
        <button>{t("Click me")}</button>
        </div>
    );
}

export default Buttons;