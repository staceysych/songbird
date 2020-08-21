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
const MAX_SCORE = 36;
const MAX_ROUND_SCORE = 6;
const BUTTON_TEXT = 'Next Level';
const QUESTION_ARRAY = [
  { name: 'warm-up', label: 'Разминка' },
  { name: 'A', label: 'A-spells' },
  { name: 'B-C', label: 'B - C' },
  { name: 'D-I', label: 'D - I' },
  { name: 'L-P', label: 'L - P' },
  { name: 'P-W', label: 'P - W' },
];
const WIN_TEXT = 'Поздравляем, ты справился(лась) со всеми заклинаниями! Ты на правильном пути к становлению великим волшебником!';
const TOTAL_WIN_TEXT = 'Bloody hell! Ты просто мастер заклинаний, гордость нашей школы магии и волшебства!';
const START_GAME_TEXT = 'Добро пожаловать в школу магии и волшебства. Сегодня Вам предстоить показать свои знания магических заклинаний. Набирай очки, и возможно, именно ты станешь новым великим валшебником.';
const PLAY_AGAIN_TEXT = 'Play again';
const START_TEXT = 'Start game';
const WIN_SOUND_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/win.mp3';
const ERROR_SOUND_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/error.mp3';
const FINAL_SONG_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/John%20Williams%20-%20End%20Credits%20(mp3cut.net).mp3';
const START_SONG_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/John%20Williams%20-%20Prologue%20(mp3cut.net).mp3';

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
  WIN_SOUND_URL,
  ERROR_SOUND_URL,
  BUTTON_TEXT,
  WIN_TEXT,
  TOTAL_WIN_TEXT,
  PLAY_AGAIN_TEXT,
  MAX_SCORE,
  MAX_ROUND_SCORE,
  FINAL_SONG_URL,
  START_SONG_URL,
  START_GAME_TEXT,
  START_TEXT,
};
