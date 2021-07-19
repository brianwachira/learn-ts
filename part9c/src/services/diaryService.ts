import diaryData from '../../data/diaries.json';
import { DiaryEntry,NonSensitiveDiaryEntry } from '../types';

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

const getEntries = (): Array<DiaryEntry> => {
    return diaries;
};

const addEntry = () => {
    return null;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};

// const addDiary = () => {
//     return []
// };

export default {
    getEntries,
    addEntry,
    getNonSensitiveEntries
};
