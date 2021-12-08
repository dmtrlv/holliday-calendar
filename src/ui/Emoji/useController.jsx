// Base
import { useMemo } from 'react';

// Constants
import { DAY_TYPES } from '../../constants/app';
import { HOLIDAY_EMOJI, WEEKEND_EMOJI, WORK_DAY_EMOJI } from './emoji';

const emojiMap = {
  [DAY_TYPES.holidayBoth]: HOLIDAY_EMOJI,
  [DAY_TYPES.holidayPublic]: HOLIDAY_EMOJI,
  [DAY_TYPES.holidayFolk]: HOLIDAY_EMOJI,
  [DAY_TYPES.workDay]: WORK_DAY_EMOJI,
  [DAY_TYPES.weekend]: WEEKEND_EMOJI,
};

const useController = (dayType) => {
  const emoji = useMemo(() => {
    const emojiIds = [];
    const currentEmoji = emojiMap[dayType];

    while (emojiIds.length < 3) {
      const id = Math.floor(Math.random() * currentEmoji.length);
      if (emojiIds.indexOf(id) === -1) emojiIds.push(id);
    }

    return [currentEmoji[emojiIds[0]], currentEmoji[emojiIds[1]], currentEmoji[emojiIds[2]]];
  }, [dayType]);

  return { emoji };
};

export default useController;
