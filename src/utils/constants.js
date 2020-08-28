const DATA_OBJ_LENGTH = 6;
const DEFAULT_AUDIO_TIME = '00:00.00';
const TOTAL_VOLUME_SLIDER_HEIGHT = 100;
const TOTAL_TIMELINE_WIDTH = 100;
const PERCENT_COEFFICIENT = 100;
const NOT_FULL_TOP = 0.9;
const LOADER_DELAY = 1000;
const MAX_SCORE = 36;
const RU = 0;
const ENG = 1;
const MAX_ROUND_SCORE = 6;
const BUTTON_TEXT = ['Следующее заклинание', 'Next spell'];
const FINISH_TEXT = ['Закончить', 'Finish'];
const QUESTION_ARRAY = [
  { name: 'warm-up', label: ['Разминка', 'Warm-up'] },
  { name: 'A', label: ['Заклинания на А', '"A" spells'] },
  { name: 'B-C', label: ['от B до C', 'From B to C'] },
  { name: 'D-I', label: ['от D до I', 'From D to I'] },
  { name: 'L-P', label: ['от L до P', 'From L to P'] },
  { name: 'P-W', label: ['от P до W', 'From P to N'] },
];
const WIN_TEXT = ['Поздравляем, ты справился со всеми заклинаниями! Ты на правильном пути к становлению великим волшебником!', 'Congratulations! You made it! You are on the right way to becoming a great wizard'];
const TOTAL_WIN_TEXT = ['You are brilliant! Ты просто мастер заклинаний, гордость нашей школы магии и волшебства!', 'You are brilliant! You are a real "Master of Spells". It is an honor to have You as a student in our school of magic and wizardry'];
const START_GAME_TEXT = ['Добро пожаловать в школу магии и волшебства. Сегодня Вам предстоить показать свои знания магических заклинаний. Набирай очки, и возможно, именно ты станешь новым великим волшебником.', 'Welcome to our school of magic and wizardry. Today You need to show you knowledge of magic spells. Get points, and who knows, maybe You will become a great wizard today!'];
const PLAY_AGAIN_TEXT = ['Играть заново', 'Play again'];
const WELCOME = ['Добро пожаловать на урок заклинаний. Меня зовут профессор Макгонагалл. Сегодня я буду вашим помощником в обучении. Итак, начнем разминку. Послушайте заклинание и выберите из списка, какой у него эффект.', 'Welcome to a "Spell lesson". My name is professor McGonagall. Today I will be you guide. So, let us start with "Warm up". Listen to a spell and choose from the list on the left what the spell\'s effect is.'];
const FIRST_PAGE = [`Усложняем задание. 
Теперь тебе нужно определить правильный эффект заклинания из 7 возможных. Будь очень внимателен! Чем быстрее ты отгадаешь, тем больше баллов получишь.`, 'Let\'s level up. Now you need to choose the right effect from 7 possible options. The sooner you find the correct answer, the more points you get'];
const INITIAL_TEXT = ['Продолжай в том же духе. Главное в заклинаниях - это не только правильно их определять, но и четко произносить самостоятельно. Слушай и практикуйся!', 'Go on playing! The most important in spells is not only choosing them correctly but also pronounce clearly. So, listen and try to practice.'];
const BEFORE_FINAL_TEXT = ['Замечательно! Ты почти справился. Осталось последнее заклинание. Ты уже у цели. Выбирай скорее и давай посмотрим на твои баллы. Может имеенно ты станешь сегодня мастером заклинаний.', 'Great! You are almost there. Just one more spell. Find the correct effect and let\'s see the results. Maybe, You will be our a new "Master Spell" today.'];
const START_TEXT = ['Начать', 'Start'];
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
  FINISH_TEXT,
  RU,
  ENG,
};
