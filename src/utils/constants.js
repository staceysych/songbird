const DATA_OBJ_LENGTH = 6;
const INITIAL_CARD_TEXT = `Послушайте заклинание.
                            Выберите из списка, 
                            что делает это заклинание.`;
const DEFAULT_AUDIO_TIME = '00:00.00';
const TOTAL_VOLUME_SLIDER_HEIGHT = 100;
const TOTAL_TIMELINE_WIDTH = 100;
const PERCENT_COEFFICIENT = 100;
const NOT_FULL_TOP = 0.9;
const LOADER_DELAY = 1000;
const QUESTION_ARRAY = [
  { name: 'warm-up', label: 'Разминка' },
  { name: 'A', label: 'A-spells' },
  { name: 'B-C', label: 'B - C' },
  { name: 'D-I', label: 'D - I' },
  { name: 'L-P', label: 'L - P' },
  { name: 'P-W', label: 'P - W' },
];

export {
  DATA_OBJ_LENGTH,
  INITIAL_CARD_TEXT,
  DEFAULT_AUDIO_TIME,
  TOTAL_VOLUME_SLIDER_HEIGHT,
  TOTAL_TIMELINE_WIDTH,
  PERCENT_COEFFICIENT,
  NOT_FULL_TOP,
  LOADER_DELAY,
  QUESTION_ARRAY,
};
