export const shareFacebook = (href) => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${href}`, '_blank');
};

export const shareVK = (href) => {
  window.open(`https://vk.com/share.php?url=${href}`, '_blank');
};

export const shareTwitter = (href) => {
  window.open(`https://twitter.com/intent/tweet?url=${href}`, '_blank');
};

export const shareTelegram = (href) => {
  window.open(`https://telegram.me/share/url?url=${href}`, '_blank');
};

export const shareMail = (href) => {
  window.open(`mailto:?body=${href}`, '_blank');
};
