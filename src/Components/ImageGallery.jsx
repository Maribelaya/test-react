import ImageCard from "./ImageCard";

// const ImageGallery = ({ items }) => {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.objectID}>
//           <ImageCard href={item.url}>{item.title}</ImageCard>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default ImageGallery;

const ImageGallery = ({ items, onClick }) => {
  // console.log("hsdjkghsalghjksahgjkashfgj");
  // console.log(items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard article={item.urls.small} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
