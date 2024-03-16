import { MMKV } from 'react-native-mmkv';

const mmkvStorage = new MMKV({
  id: 'secure-storage',
  encryptionKey: '^$QJZr7jr+G*Dts)',
});

const storage = {
  get: key => {
    return mmkvStorage.getString(key);
  },

  set: (key, value) => {
    mmkvStorage.set(key, value);
  },

  remove: key => {
    mmkvStorage.delete(key);
  },

  clear: () => {
    mmkvStorage.clearAll();
  },

  contains: key => {
    return mmkvStorage.contains(key);
  },

  getAllKeys: () => {
    return mmkvStorage.getAllKeys();
  },
};

export default storage;
