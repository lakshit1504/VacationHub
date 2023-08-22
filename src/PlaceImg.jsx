import Image from "./Image.jsx";

export default function PlaceImg({place,index=0,className=null}) {
  if (!place.photos?.length) {
    return '';
  }
  if (!className) {
    className = 'object-cover';
  }
  return (
    <img className={className} src={'https://vacationhub-api.onrender.com/'+place.photos[index]} alt=""/>
  );
}