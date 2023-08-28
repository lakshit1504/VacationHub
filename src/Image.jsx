export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : 'https://vacationhub-api.onrender.com/uploads/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}