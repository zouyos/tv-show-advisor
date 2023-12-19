import style from "./style.module.css";

export default function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={style.container}>
        <img className={style.image} src={image} alt="Logo" />
        <span className={style.title}>{title}</span>
      </div>
      <span className={style.subtitle}>{subtitle}</span>
    </>
  );
}
