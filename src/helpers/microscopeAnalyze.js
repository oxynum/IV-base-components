export const MICROSCOPES = {
  MIRI: {
    code: 'MIRI',
    recognition: /MTL-[0-9]{4}-(?:[0-9;A-Z]{4}-){2}P([0-9]*)-FP3\.[mp4|avi|mov]*/gm
  },
  GERI: {
    code: 'GERI',
    recognition: /well([0-9]+)_zid[0-9]+\.[mp4|avi|mov]*/gm
  },
  EMBRYOSCOPE: {
    code: 'EMBR',
    recognition: /D[0-9]{4}(?:\.[0-9]{2}){2}_S[0-9]{5}_I[0-9]{4}_[A-Za-z]_wells_([0-9]*)_video(?:_[0-9]*)?\.[avi|mp4|mov]*/gm
  }
}
