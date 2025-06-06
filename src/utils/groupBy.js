export const groupPhotosBy15Min = (photos) => {
  const grouped = {};

  photos.forEach((photo) => {
    const date = new Date(photo.createdAt);
    const rounded = new Date(date);

    rounded.setMinutes(Math.floor(date.getMinutes() / 15) * 15);
    rounded.setSeconds(0);
    rounded.setMilliseconds(0);

    const key = rounded.toISOString();

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(photo);
  });

  return grouped;
};

export const formatTimeGroup = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
