const DATA_OBJ_LENGTH = 6;
const DEFAULT_AUDIO_TIME = '00:00.00';
const TOTAL_VOLUME_SLIDER_HEIGHT = 100;
const TOTAL_TIMELINE_WIDTH = 100;
const PERCENT_COEFFICIENT = 100;
const NOT_FULL_TOP = 0.9;
const LOADER_DELAY = 1000;
const MAX_SCORE = 36;
const MAX_ROUND_SCORE = 6;
const BUTTON_TEXT = 'Следующая группа заклинаний';
const QUESTION_ARRAY = [
  { name: 'warm-up', label: 'Разминка' },
  { name: 'A', label: 'A-spells' },
  { name: 'B-C', label: 'B - C' },
  { name: 'D-I', label: 'D - I' },
  { name: 'L-P', label: 'L - P' },
  { name: 'P-W', label: 'P - W' },
];
const WIN_TEXT = 'Поздравляем, ты справился со всеми заклинаниями! Ты на правильном пути к становлению великим волшебником!';
const TOTAL_WIN_TEXT = 'You are brilliant! Ты просто мастер заклинаний, гордость нашей школы магии и волшебства!';
const START_GAME_TEXT = 'Добро пожаловать в школу магии и волшебства. Сегодня Вам предстоить показать свои знания магических заклинаний. Набирай очки, и возможно, именно ты станешь новым великим волшебником.';
const PLAY_AGAIN_TEXT = 'Играть заново';
const WELCOME = 'Добро пожаловать на урок заклинаний. Меня зовут профессор Макгонагалл. Сегодня я буду вашим помощником в обучении. Итак, начнем разминку. Послушайте заклинание и выберите из списка, какой у него эффект.';
const FIRST_PAGE = `Усложняем задание. 
Теперь тебе нужно определить правильный эффект заклинания из 7 возможных. Будь очень внимателен! Чем быстрее ты отгадаешь, тем больше баллов получишь.`;
const INITIAL_TEXT = 'Продолжай в том же духе. Главное в заклинаниях - это не только правильно их определять, но и четко произносить самостоятельно. Слушай и практикуйся!';
const BEFORE_FINAL_TEXT = 'Замечательно! Ты почти справился. Осталось последнее заклинание. Ты уже у цели. Выбирай скорее и давай посмотрим на твои баллы. Может имеенно ты станешь сегодня мастером заклинаний.';
const START_TEXT = 'Начать';
const WIN_SOUND_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/spell-effects/brilliant%20(mp3cut.net).mp3';
const ERROR_SOUND_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/spell-effects/no%20(mp3cut.net).mp3';
const FINAL_SONG_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/John%20Williams%20-%20End%20Credits%20(mp3cut.net).mp3';
const START_SONG_URL = 'https://raw.githubusercontent.com/staceysych/spell-sounds/master/John%20Williams%20-%20Prologue%20(mp3cut.net).mp3';

export {
  DATA_OBJ_LENGTH,
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
  WELCOME,
  FIRST_PAGE,
  INITIAL_TEXT,
  BEFORE_FINAL_TEXT,
};
