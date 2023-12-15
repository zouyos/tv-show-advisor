import style from "./style.module.css";
import { Star, StarHalf, StarFill } from "react-bootstrap-icons";

export default function FiveStarRating({ rating }) {
  return (
    <>
      <StarFill />
      <StarFill />
      <StarFill />
      <StarHalf />
      <Star />
    </>
  );
}
