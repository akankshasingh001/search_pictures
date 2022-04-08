import React from 'react';

const ImageList = props => {
  const img = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{img}</div>;
};

export default ImageList;
