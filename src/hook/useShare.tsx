export enum ShareList {
  copyLink = 'copyLink',
  facebook = 'facebook',
  twitter = 'twitter',
  linkedin = 'linkedin',
}

const ShareCurrentPage = (type: ShareList = ShareList.copyLink, to: string = '', utm: string = '') => {
  let shareTargetUrl = window.location.href;
  if (to) {
    console.log('has to');
    if (/http|www/.test(to)) {
      shareTargetUrl = to;
    } else {
      shareTargetUrl = `${window.location.origin}${to}`;
    }
  } else {
    console.log('dont have to');
  }
  if (type == ShareList.copyLink) {
    const tempInput = document.createElement('input');

    tempInput.style.fontSize = '20px';
    document.body.appendChild(tempInput);
    tempInput.value = shareTargetUrl + (utm ? (shareTargetUrl.includes('?') ? `&${utm}` : `?${utm}`) : '');
    tempInput.readOnly = true;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    return true;
  }

  const params = `width=500,height=600`;

  if (type == ShareList.facebook) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareTargetUrl}`, 'facebook', params);
    return;
  }

  if (type == ShareList.linkedin) {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareTargetUrl}`, 'linkin', params);
  }

  if (type == ShareList.twitter) {
    window.open(`https://twitter.com/intent/tweet?url=${shareTargetUrl}`, 'linkin', params);
  }
};

export default ShareCurrentPage;
