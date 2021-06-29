export const flattenImageCarousel = images => {
  if (images !== undefined && !images) {
    if (images.length !== 0) {
      return images.map(image => {
        if (!image.fields) {
          return image;
        }
        return {
          url: image.fields.file.url,
          title: image.fields.title,
        };
      });
    }
  }
  return images;
};

export const flattenImageProperty = image => {
  if (image?.fields) {
    return {
      title: image.fields.title || '',
      url: image.fields.file.url || '',
      width: image.fields.file.details.image.width || '',
      height: image.fields.file.details.image.height || '',
    };
  }
  return image;
};
